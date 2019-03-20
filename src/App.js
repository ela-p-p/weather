import React, { Component } from 'react';
import './App.css';
import CityCard from './CityCard';
import JSONresults from './apiData/cities'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      result: []
    };
  }


  handleClick = (event) => {
    console.log(this.state.city)
    event.preventDefault();
    const result = JSONresults.filter(
      city => {
        return city.title.toLowerCase().startsWith(this.state.city.toLowerCase())
      }
    )

    const newResult = this.state.result.filter(oldCity => oldCity.title !== result[0].title)
    if (newResult.length > 4) {
      newResult.pop()
    }
    this.setState({
      result: [...result, ...newResult],
      city: ''
    })
  }

  handleChange = (event) => {
    this.setState({ city: event.target.value });
  }


  render() {
    const results = this.state.result
    console.log(results)
    return (
      <div className="App">
        <form onSubmit={this.handleClick}>
          <label>
            City:
                <input type="text"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.handleClick}>
            Submit
            </button>
        </form>
        <CityCard
          results={results}
        />
      </div>

    );
  }
}

export default App;
