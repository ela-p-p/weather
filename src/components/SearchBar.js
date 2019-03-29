import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import JSONresults from '../api/citiesData'
//import { isBigIntLiteral } from 'typescript';

const styles = theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

class SearchBar extends React.Component {
 
  onHandleChange = (event) => {
    this.props.setName(event.target.value)
  }
  searchCity = (event) => {
    event.preventDefault(event)
    this.props.getCity(this.props.city.name)
  }

  // render() {
  //   return (
  //     <div>
  //       <div className="row">
  //         <div className="col-xs-12">
  //           <h1>Weather App</h1>
  //         </div>
  //       </div>
  //       <div className="row">
  //         <div className="col-xs-12">
  //           <form>
  //             <input type="text" value={this.props.city.name}
  //               onChange={(event) => this.onHandleChange(event)}
  //             />
  //             <button
  //               className="btn btn-primary"
  //               onClick={this.searchCity.bind(this)}>Search</button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.searchCity}>
        <Paper className={classes.root} elevation={1}>
          <InputBase className={classes.input} 
          //placeholder="Search City" 
          value={this.props.city.name}
          onChange={(event) => this.onHandleChange(event)}/>
          <Button variant="outlined" size="small" color="default" className={classes.margin} onClick={this.searchCity}>
          Search
        </Button>
          <Divider className={classes.divider} />

        </Paper>
      </form>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {
    city: state
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
  }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
