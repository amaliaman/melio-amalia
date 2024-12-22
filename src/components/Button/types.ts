export interface ButtonProps {
  label: string;
  type?: 'primary' | 'tertiary' | 'critical'; // other possible button types: icon, stealth, link
  size?: 'small' | 'medium';
  iconLeft?: string; // for this assignment, I'm using emojis as icons
  iconRight?: string; // for this assignment, I'm using emojis as icons
  onClick: () => void;
}
