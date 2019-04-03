import * as React from "react";
import CityCard from "../components/CityCard";
import SearchBar from "../components/SearchBar";
import { connect } from "react-redux";
import { StoreState } from "../types/index"

interface IProps {
  results?: any[];
}
class App extends React.Component<IProps> {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>Weather App</h1>
          </div>
        </div>
        <SearchBar />
        <CityCard results={this.props.results} />
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): IProps=> {
  return {
    results: state.results
  };
};

//which global actions to be used locally
//the key is name for local, and property is the action (in this case a function with a name argument)
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setName: (name) => {
//       dispatch({
//         type: "SET_NAME",
//         payload: name
//       })
//     }
//   }
// }
export default connect(mapStateToProps)(App);
