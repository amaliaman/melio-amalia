import React from 'react';
import './Modal.css';
import { Header, Body, Footer } from './components';
import { ModalProps } from './types';

export const Modal = ({
  children,
  title,
  icon,
  handleAction,
  actionTitle,
  handleCancel,
  cancelTitle,
  isFooter = true,
  isCloseButton = true,
  isOpen = false,
  onClose,
}: ModalProps) => {
  return isOpen ? (
    <div className="modal">
      <Header
        title={title}
        icon={icon}
        isCloseButton={isCloseButton}
        onClose={onClose}
      />

      <Body isFooter={isFooter}>{children}</Body>

      {isFooter && (
        <Footer
          handleAction={handleAction}
          actionTitle={actionTitle}
          handleCancel={handleCancel}
          cancelTitle={cancelTitle}
        />
      )}
    </div>
  ) : null;
};
