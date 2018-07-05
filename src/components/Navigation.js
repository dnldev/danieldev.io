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
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';

// import strings from '../localization/game-locale';

import navigationLinks from './navigationLinks';

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
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
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

  getParsedLocation = () => {
    if (this.props.location.pathname === '/') {
      return 'Home';
    } else {
      const pathName = this.props.location.pathname.replace('/', '');
      return this.titleCase(pathName);
    }
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

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
        <List>{navigationLinks}</List>
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
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
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
