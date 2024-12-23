import React from 'react';
import './Header.css';
import { Button } from '../../../Button';
import { HeaderProps } from './types';

export const Header = ({ title, icon, isClose = true }: HeaderProps) => {
  return (
    <div className="header">
      <div className="header-left">
        {/* using an emoji for now */}
        {icon && <span className="icon">{icon}</span>}
        <span className="title">{title}</span>
      </div>

      {isClose && (
        <Button
          type="icon-button"
          iconButton="✖️"
          onClick={() => alert('Close modal')} // implement close modal
        />
      )}
    </div>
  );
};
