import * as React from "react";
import * as Redux from "redux";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as actions from "../actions";
import { StoreState } from "../types/index";

const styles: any = (theme: any) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
});

export interface OwnProps {
  classes: any;
}
export interface StateProps {
  name?: string;
  results?: any[];
}

export interface DispatchProps {
  setName?: (name: any) => any;
  getCity?: (name: any) => any;
}

type IProps = StateProps & DispatchProps & OwnProps;

class SearchBar extends React.Component<IProps> {
  onHandleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    this.props.setName!(event.currentTarget.value);
  };
  searchCity = (event: any) => {
    event.preventDefault();
    this.props.getCity!(this.props.name);
  };

  render() {
    const { classes, name } = this.props;
    console.log(this.props);

    return (
      <form onSubmit={this.searchCity}>
        <Paper className={classes.root} elevation={1}>
          <InputBase
            className={classes.input}
            //placeholder="Search City"
            value={name}
            onChange={this.onHandleChange}
          />
          <Button
            variant="outlined"
            size="small"
            color="default"
            className={classes.margin}
            onClick={this.searchCity}
          >
            Search
          </Button>
          <Divider className={classes.divider} />
        </Paper>
      </form>
    );
  }
}

const mapStateToProps = (state: StoreState): StateProps => {
  return {
    name: state.name,
    results: state.results
  };
};

//which global actions to be used locally
//the key is name for local, and property is the action (in this case a function with a name argument)

const mapDispatchToProps = (
  dispatch: Redux.Dispatch<actions.cityAction>
): DispatchProps => {
  return {
    setName: name => dispatch(actions.setName(name)),
    getCity: name => dispatch(actions.getCity(name))
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar)
);
