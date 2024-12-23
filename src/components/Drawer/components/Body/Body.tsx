import React from 'react';
import './Body.css';
import { BodyProps } from './types';

export const Body = ({ children }: BodyProps) => {
  return <div className="drawer-body">{children}</div>;
};
