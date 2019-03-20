import React, { Component } from 'react';
import './App.css';
import CityCard from './CityCard';
import JSONresults from './apiData/cities'
//import SearchBar from './SearchBar';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      result: []
    };
  }

  handleChange = (event) => {
    this.setState({ city: event.target.value });
  }


  handleClick = (event) => {
    event.preventDefault();
    const result = JSONresults.filter(
      city => {
        return city.title.toLowerCase().startsWith(this.state.city.toLowerCase())
      }
    )
    const newResult = this.state.result.filter(olderCity => olderCity.title !== result[0].title)
    if (newResult.length > 4) {
      newResult.pop()
    }
    this.setState({
      result: [...result, ...newResult],
      city: ''
    })
  }


  render() {
    const results = this.state.result
    console.log(results)
    return (
      <div className="App">
        <form >
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
