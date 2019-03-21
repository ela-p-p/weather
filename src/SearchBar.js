import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

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

const SearchBar = props => {
  const { classes } = props;

  return (
    <form onSubmit={props.handleClick}>
    <Paper className={classes.root} elevation={1}>
      
      <InputBase className={classes.input} placeholder="Search City" value={props.value} onChange={props.handleChange}/>
        <Button variant="outlined" size="small" color="default" className={classes.margin} onClick={props.handleClick}>
          Search
        </Button>
     
      <Divider className={classes.divider} />
      
    </Paper>
    </form>
  );
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);

// const SearchBar = (props) => {
//   return (
//     <form >
//       <label>
//         City:
//           <input type="text"
//           value={props.value}
//           onChange={props.handleChange}
//         />
//       </label>
//       <button
//         onClick={props.handleClick}
//       >
//         Search
//             </button>
//     </form>
//   )
// }

// export default SearchBar
