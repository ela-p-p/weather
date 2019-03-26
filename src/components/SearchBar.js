import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
//import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import JSONresults from '../api/citiesData'

// const styles = theme => ({
//   root: {
//     padding: '2px 4px',
//     display: 'flex',
//     alignItems: 'center',
//     width: 300,
//     ...theme.mixins.gutters(),
//     paddingTop: theme.spacing.unit * 2,
//     paddingBottom: theme.spacing.unit * 2,
//   },
//   input: {
//     marginLeft: 8,
//     flex: 1,
//   },
//   divider: {
//     width: 1,
//     height: 28,
//     margin: 4,
//   },
// });

class SearchBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      results: []
    }
  }
  onHandleChange(event) {
    this.setState({
      username: event.target.value
    })
  }
  searchCity(event) {
    event.preventDefault(event)
    this.props.getCity(this.state.username)
    // this.setState({
    //   results: this.results.push(oneCity)
    // })
  }

  // displayCity(name) {
  //   const newResult = action.payload.filter(oldCity => oldCity.title !== result[0].title)
  //   if (newResult.length > 4) {
  //     newResult.pop()
  //   }
  //   this.setState({
  //     result: [...result, ...newResult],
  //     city: ''
  //   })
  // }


  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h1>Weather App</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <form>
              <input type="text" value={this.state.username}
                onChange={(event) => this.onHandleChange(event)}
              />
              <button
                className="btn btn-primary"
                onClick={this.searchCity.bind(this)}>Search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  // render() {
  //   const { classes } = this.props;
  //   return (
  //     <form onSubmit={this.handleSubmit}
  //     >
  //       <Paper className={classes.root} elevation={1}>
  //         <InputBase className={classes.input} 
  //         //placeholder="Search City" 
  //         value={this.state.username}
  //         onChange={(event) => this.onHandleChange(event)}/>
  //         {/* <Button variant="outlined" size="small" color="default" className={classes.margin} onClick={props.handleClick}>
  //         Search
  //       </Button> */}
  //         <Divider className={classes.divider} />

  //       </Paper>
  //     </form>
  //   );
  // }
}

// SearchBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
const mapStateToProps = (state) => {
  return {
    city: state.cityReducer
  }
}

//which global actions to be used locally
//the key is name for local, and property is the action (in this case a function with a name argument)
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      })
    },
    getCity: (name) => {
      dispatch({
        type: "GET_CITY",
        payload: JSONresults.filter(
          city => {
            return city.title.toLowerCase().startsWith(name.toLowerCase())
          }
        )
      });
    },
    displayCity: (name) => {
      dispatch({
        type: "DISPLAY_CITY",
        payload: ''
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
//export default withStyles(styles)(SearchBar);
