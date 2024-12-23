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
        <Button type="tertiary" onClick={handleCancel}>
          {cancelTitle}
        </Button>
      )}

      {actionTitle && (
        <Button type="critical" onClick={handleAction}>
          {actionTitle}
        </Button>
      )}
    </div>
  );
};
