import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import JSONresults from './apiData/cities';
//mport SearchIcon from '@material-ui/icons/SearchIcon';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  // searchIcon: {
  //   width: theme.spacing.unit * 9,
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class SearchBar extends Component {
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
    const { classes } = this.props
    const results = this.state.result
    console.log(results)

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">

            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Weather
          </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                {/* <SearchIcon /> */}
              </div>
              <InputBase
                placeholder="Search…"
                value={this.state.city}
                onChange={this.handleChange}
                onClick={this.handleClick}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}>


              </InputBase>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);