import React from "react";
import CityCard from "../components/CityCard";
// import JSONresults from '../api/citiesData'
import SearchBar from "../components/SearchBar";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>Weather App</h1>
          </div>
        </div>
        <SearchBar />
        <CityCard results={this.props.city.results} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    city: state
  };
};

export default connect(mapStateToProps)(App);
