import React from 'react';
import './Drawer.css';
import { Header, Body } from './components';
import { DrawerProps } from './types';

export const Drawer = ({ children, title }: DrawerProps) => {
  return (
    <div className="drawer">
      <Header title={title} />
      <Body>{children}</Body>
    </div>
  );
};
