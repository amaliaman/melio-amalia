import React from 'react';
import { CardProps } from './types';
import './Card.css';

export const Card = ({ title, children, rightAction }: CardProps) => {
  return (
    <div className="card">
      <div className="body">
        {/* top can be extended to support any element */}
        <div className="top">{title}</div>
        <div className="description">{children}</div>
      </div>

      {rightAction && <div className="right">{rightAction}</div>}
    </div>
  );
};
