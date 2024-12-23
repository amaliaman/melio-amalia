import React from 'react';
import './Header.css';
import { Button } from '../../../Button';
import { HeaderProps } from './types';

export const Header = ({
  title,
  icon,
  isCloseButton = true,
  onClose,
}: HeaderProps) => {
  return (
    <div className="header">
      <div className="header-left">
        {/* using an emoji for now */}
        {icon && <span className="icon">{icon}</span>}
        <span className="title">{title}</span>
      </div>

      {isCloseButton && (
        <Button type="icon-button" iconButton="✖️" onClick={onClose} />
      )}
    </div>
  );
};
