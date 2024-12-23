import React from 'react';
import './Header.css';
import { Button } from '../../../Button';
import { HeaderProps } from './types';

export const Header = ({ title, onClose }: HeaderProps) => {
  return (
    <div className="drawer-header">
      <div className="drawer-header-left">
        <span className="title">{title}</span>
      </div>

      <Button type="icon-button" iconButton="✖️" onClick={onClose} />
    </div>
  );
};
