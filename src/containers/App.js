import React, { Component } from 'react';
import CityCard from '../components/CityCard';
import JSONresults from '../api/citiesData'
import SearchBar from '../components/SearchBar';
import { connect } from 'http2';



class App extends Component {
  constructor(props) {
    super(props);
  }

  const initialStateCity = {
    city: '',
  }

  const initialStateResult = {
    result: [],
    city: ''
  }

  const cityReducer = (state = initialStateCity, action) => {
    switch (action.type) {
      case 'GET_CITY':
        state = {
          ...state,
          city: action.payload
        }
        break;
      case 'SEARCH_CITY':
        state = {
          ...state,
          result: [...state.result, action.payload]
        }
        break;
      case 'CLEAR_CITY':
        state = {
          ...state,
          city: ''
        }
        return state
    }

    // const clickReducer = (state = initialStateResult, action) => {
    //     switch (action.type) {
    //         case 'SEARCH_CITY':
    //             state = {
    //                 ...state,
    //                 result: [...state.result, action.payload]
    //             }
    //     }
    // }
    const store = createStore(cityReducer)

    store.dispatch({
      type: 'GET_CITY',
      payload: city
    })
    store.dispatch({
      type: 'SEARCH_CITY',
      payload: result
    })
    // handleChange = (event) => {
    //   this.setState({ city: event.target.value });
    // }


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


  const mapStateToProps = (state) => {
    return {

    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {

    }
  }

  connect(mapStateToProps, mapDispatchToProps);
  export default App;
