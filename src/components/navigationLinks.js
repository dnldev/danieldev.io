import React from 'react';

import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import CodeIcon from '@material-ui/icons/Code';

export default (
  <ListItem button component={Link} to="/projects">
    <ListItemIcon>
      <CodeIcon />
    </ListItemIcon>
    <ListItemText primary="Projects" />
  </ListItem>
);
