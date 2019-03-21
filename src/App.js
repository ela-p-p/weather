import React, { Component } from 'react';
import CityCard from './CityCard';
import JSONresults from './api/citiesData'
import SearchBar from './SearchBar';



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
    
    return (
      <div className="container">
        <SearchBar value={this.state.city} handleChange={this.handleChange} handleClick={this.handleClick}
        />
        <CityCard
          results={results}
        />
      </div>
    );
  }
}

export default App;
