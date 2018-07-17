import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import ReactMarkdown from 'react-markdown';
import { renderers } from '../renderers';

// import strings from '../localization/game-locale';

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 4,
  },
  clickArea: {
    textDecoration: 'none !important',
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

class BlogEntry extends Component {
  render() {
    const {
      classes,
      date,
      headline,
      imageUrl,
      leadingText,
      post,
      preview,
      subheader,
      url,
    } = this.props;

    const imageContainer = (
      <div className={classes.imageContainer}>
        <img className={classes.image} src={imageUrl} alt={url + ' image'} />
      </div>
    );

    return (
      <div className={classes.root}>
        <Typography variant="display1">{headline}</Typography>
        <Typography variant="caption">{date}</Typography>
        <Typography className={classes.subheader} variant="caption">
          {'"' + subheader + '"'}
        </Typography>
        {preview && (
          <Link className={classes.clickArea} to={'/blog/' + url}>
            {imageUrl && imageContainer}
            <Typography variant="body1" gutterBottom>
              {leadingText}...
            </Typography>
          </Link>
        )}
        {!preview && (
          <React.Fragment>
            {imageUrl && imageContainer}
            <ReactMarkdown source={post} renderers={renderers} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

BlogEntry.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  imageUrl: PropTypes.string,
  leadingText: PropTypes.string.isRequired,
  post: PropTypes.string,
  preview: PropTypes.bool,
  subheader: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

BlogEntry.defaultProps = {
  preview: false,
};

export default withStyles(styles)(BlogEntry);
