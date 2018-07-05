import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// import strings from '../localization/game-locale';

const styles = theme => ({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    height: 200,
    marginBottom: theme.spacing.unit * 4,
  },
  darkText: {
    color: '#000',
  },
  description: {
    padding: theme.spacing.unit * 2,
  },
  imageContainer: {
    height: 150,
    overflow: 'hidden',
  },
  image: {
    filter: 'blur(2px)',
    width: '100%',
  },
  lightText: {
    color: '#FFF',
  },
  title: {
    height: 0,
    marginBottom: 0,
    marginLeft: theme.spacing.unit * 2,
    position: 'relative',
    top: 110,
    zIndex: 1,
  },
});

class Project extends Component {
  render() {
    const { classes, description, image, name, theme } = this.props;

    return (
      <Paper className={classNames(classes.root)}>
        <div className={classes.imageContainer}>
          <Typography
            className={classNames(
              classes.title,
              theme === 'light' ? classes.darkText : classes.lightText
            )}
            variant="headline"
            gutterBottom
          >
            {name}
          </Typography>
          <img className={classes.image} alt={name} src={image} />
        </div>
        <Typography
          className={classNames(classes.description)}
          gutterBottom
          noWrap
        >
          {description}
        </Typography>
      </Paper>
    );
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  url: PropTypes.string,
};

Project.defaultProps = {
  theme: 'light',
};

export default withStyles(styles)(Project);
