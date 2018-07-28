import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import SendIcon from '@material-ui/icons/Send';

const styles = theme => ({
  root: {},
  sendIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class NewEntry extends Component {
  state = { url: '' };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  inputTextField = name => (
    <TextField
      fullWidth
      label={this.titleCase(name)}
      margin="normal"
      name={name}
      value={this.state[name]}
      onChange={this.handleChange}
    />
  );

  titleCase = str => {
    const result = str.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  };

  render() {
    const { classes, addBlogPost, loggedOut } = this.props;
    const { inputTextField } = this;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={6}>
          {inputTextField('url')}
        </Grid>
        <Grid item xs={6}>
          {inputTextField('date')}
        </Grid>
        <Grid item xs={6}>
          {inputTextField('headline')}
        </Grid>
        <Grid item xs={6}>
          {inputTextField('subheader')}
        </Grid>
        <Grid item xs={12}>
          {inputTextField('leadingText')}
        </Grid>
        <Grid item xs={12}>
          {inputTextField('post')}
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              addBlogPost({
                variables: this.state,
              }).catch(err => {
                console.log(err);
                alert('Session Ended, Log-in again!');
                loggedOut();
              })
            }
          >
            Submit
            <SendIcon className={classes.sendIcon} />
          </Button>
        </Grid>
      </Grid>
    );
  }
}

NewEntry.propTypes = {
  classes: PropTypes.object.isRequired,
  addBlogPost: PropTypes.func.isRequired,
  loggedOut: PropTypes.func.isRequired,
};

export default withStyles(styles)(NewEntry);
