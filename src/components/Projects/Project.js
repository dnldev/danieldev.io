import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// import strings from '../localization/game-locale';

const styles = theme => ({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginBottom: theme.spacing.unit * 4,
  },
  contentArea: {
    padding: theme.spacing.unit * 2,
  },
  imageArea: {
    height: 150,
    overflow: 'hidden',
  },
  image: {
    filter: 'blur(2px)',
    width: '100%',
  },
  title: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class Project extends Component {
  render() {
    const { classes, shortDescription, imageUrl, title } = this.props;

    return (
      <Paper className={classes.root}>
        <div className={classes.imageArea}>
          <img className={classes.image} alt={title} src={imageUrl} />
        </div>
        <div className={classes.contentArea}>
          <Typography className={classes.title} variant="headline" gutterBottom>
            {title}
          </Typography>
          <Typography className={classes.description} gutterBottom>
            {shortDescription}
          </Typography>
        </div>
      </Paper>
    );
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
  imageUrl: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default withStyles(styles)(Project);
