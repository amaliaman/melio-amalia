import React from 'react';
import './Body.css';
import { BodyProps } from './types';
import classNames from 'classnames';

export const Body = ({ children, isFooter = true }: BodyProps) => {
  const classes = classNames('body', { 'no-footer': !isFooter });

  return <div className={classes}>{children}</div>;
};
