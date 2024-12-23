import React from 'react';
import './Footer.css';
import { Button } from '../../../Button';
import { FooterProps } from './types';

export const Footer = ({
  handleAction,
  actionTitle,
  handleCancel,
  cancelTitle,
}: FooterProps) => {
  return (
    <div className="footer">
      {cancelTitle && (
        <Button label={cancelTitle} type="tertiary" onClick={handleCancel} />
      )}
      {actionTitle && (
        <Button label={actionTitle} type="critical" onClick={handleAction} />
      )}
    </div>
  );
};
