import React from 'react';
import { ButtonProps } from './types';
import './Button.css';
import classNames from 'classnames';

export const Button = ({
  label,
  type = 'primary',
  size = 'medium',
  onClick,
  iconLeft,
  iconRight,
  // other possible props: enabled/disabled, loading, etc.
}: ButtonProps) => {
  const classes = classNames('button', type, size);

  return (
    <button className={classes} onClick={onClick}>
      {iconLeft && <span className="icon left">{iconLeft}</span>}
      {label}
      {iconRight && <span className="icon right">{iconRight}</span>}
    </button>
  );
};
