import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';

// import strings from '../localization/game-locale';

import navigationList from '../data/navigationList';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    zIndex: 1,
  },
  appBar: {
    marginLeft: drawerWidth,
    position: 'fixed',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  content: {
    padding: theme.spacing.unit * 3,
    overflow: 'auto',
    width: `calc(100vw - ${theme.spacing.unit * 6}px)`,
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.background.default,
      marginLeft: drawerWidth,
      minHeight: `calc(100vh - ${theme.spacing.unit * 14}px)`,
      paddingLeft: theme.spacing.unit * 12,
      paddingRight: theme.spacing.unit * 20,
      width: `calc(100vw - ${theme.spacing.unit * 32}px - ${drawerWidth}px)`,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'fixed',
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
});

class Navigation extends Component {
  state = {
    mobileOpen: false,
  };

  getLastPathPart = path => {
    if (path.slice(-1) === '/') {
      path = path.slice(0, -1);
    }
    const pathParts = path.split('/');

    return pathParts[pathParts.length - 1];
  };

  getParsedLocation = () => {
    if (this.props.location.pathname === '/') {
      return 'Home';
    } else {
      const pathName = this.getLastPathPart(this.props.location.pathname);
      return this.titleCase(pathName);
    }
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  removeAll(string, char) {
    return string.split(char).join('');
  }

  titleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { classes } = this.props;

    const drawer = (
      <div>
        <Grid
          container
          className={classes.toolbar}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={10}>
            <Typography
              className={classes.logo}
              component={Link}
              to="/"
              variant="title"
              gutterBottom
            >
              Daniel Dev
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        {navigationList}
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="title" color="inherit" noWrap>
              {this.getParsedLocation()}
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            open
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main>
          <div className={classes.toolbar} />
          <div className={classes.content}>{this.props.children}</div>
        </main>
      </div>
    );
  }
}

Navigation.propTypes = {
  children: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Navigation));
