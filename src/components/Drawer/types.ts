import { ReactNode } from 'react';

export interface DrawerProps {
  children?: ReactNode;
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
}
