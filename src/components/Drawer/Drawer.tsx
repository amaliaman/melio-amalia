import React from 'react';
import './Drawer.css';
import { Header, Body } from './components';
import { DrawerProps } from './types';

export const Drawer = ({
  children,
  title,
  isOpen = false,
  onClose,
}: DrawerProps) => {
  return isOpen ? (
    <div className="drawer">
      <Header title={title} onClose={onClose} />

      <Body>{children}</Body>
    </div>
  ) : null;
};
