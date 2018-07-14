import React from 'react';

import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import BookIcon from '@material-ui/icons/Book';
import CodeIcon from '@material-ui/icons/Code';

export default (
  <List>
    <ListItem button component={Link} to="/blog">
      <ListItemIcon>
        <BookIcon />
      </ListItemIcon>
      <ListItemText primary="Blog" />
    </ListItem>
    <ListItem button component={Link} to="/projects">
      <ListItemIcon>
        <CodeIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
  </List>
);
