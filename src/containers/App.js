import React from 'react';
import CityCard from '../components/CityCard';
// import JSONresults from '../api/citiesData'
import SearchBar from '../components/SearchBar';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchBar
        />
        {/* <CityCard
          // results={results}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  }
}
console.log('user', mapStateToProps)

//which global actions to be used locally
//the key is name for local, and property is the action (in this case a function with a name argument)
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
