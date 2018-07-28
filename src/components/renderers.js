/* eslint-disable react/prop-types, react/no-multi-comp */
import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { googlecode } from 'react-syntax-highlighter/styles/hljs';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const Code = props => (
  <SyntaxHighlighter
    language={props.language ? props.language : ''}
    style={googlecode}
  >
    {props.value}
  </SyntaxHighlighter>
);

const Headline = props => (
  <React.Fragment>
    <Typography
      style={{
        fontSize: props.level === 2 ? '1.3rem' : 'auto',
        marginTop: props.level === 1 ? 20 : 10,
      }}
      variant={
        props.level === 1 || props.level === 2 ? 'headline' : 'subheading'
      }
      gutterBottom
    >
      {props.children}
    </Typography>
    {props.level === 1 && <Divider />}
  </React.Fragment>
);

const Link = props => (
  <a
    style={{
      color: '#4c91ff',
      textDecoration: 'none',
    }}
    rel="noopener noreferrer"
    href={props.href}
    target="_blank"
  >
    {props.children}
  </a>
);

const ListItem = props => (
  <li>
    <Typography variant="body1">
      {props.checked !== null &&
        (props.checked ? (
          <span>[x]&nbsp;</span>
        ) : (
          <span>[&nbsp;&nbsp;]&nbsp;</span>
        ))}
      {props.children}
    </Typography>
  </li>
);

const Paragraph = props => (
  <Typography variant="body1">{props.children}</Typography>
);

export const renderers = {
  code: Code,
  heading: Headline,
  link: Link,
  listItem: ListItem,
  paragraph: Paragraph,
  thematicBreak: Divider,
};
