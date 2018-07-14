import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

// import strings from '../localization/game-locale';

const styles = theme => ({
  root: {
    cursor: 'pointer',
    marginBottom: theme.spacing.unit * 4,
  },
  image: {
    filter: 'blur(1px)',
    width: '100%',
  },
  imageContainer: {
    borderRadius: 3,
    boxShadow: '3px 3px 1.5px rgba(0, 0, 0, 0.15)',
    maxHeight: 200,
    marginBottom: theme.spacing.unit * 3,
    overflow: 'hidden',
  },
  subheader: {
    fontStyle: 'italic',
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
});

class BlogEntryPreview extends Component {
  render() {
    const {
      classes,
      date,
      headline,
      history,
      imageUrl,
      leadingText,
      subheader,
      url,
    } = this.props;

    return (
      <div
        className={classes.root}
        onClick={() => {
          history.push('/blog/' + url);
        }}
      >
        <Typography variant="headline">{headline}</Typography>
        <Typography variant="caption">{date}</Typography>
        <Typography className={classes.subheader} variant="caption">
          {'"' + subheader + '"'}
        </Typography>
        {imageUrl && (
          <div className={classes.imageContainer}>
            <img
              className={classes.image}
              src={imageUrl}
              alt={url + ' image'}
            />
          </div>
        )}
        <Typography variant="body1" gutterBottom>
          {leadingText}...
        </Typography>
      </div>
    );
  }
}

BlogEntryPreview.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  imageUrl: PropTypes.string,
  leadingText: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default withStyles(styles)(withRouter(BlogEntryPreview));
