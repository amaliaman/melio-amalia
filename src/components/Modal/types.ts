import { ReactNode } from 'react';

export interface ModalProps {
  icon?: string; // using emojis as icons for this assignment
  children?: ReactNode;
  title?: string;
  actionTitle?: string;
  cancelTitle?: string;
  handleAction?: () => void;
  handleCancel?: () => void;
  isFooter?: boolean;
  isClose?: boolean;
}
