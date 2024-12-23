export interface ButtonProps {
  label?: string;
  type?: 'primary' | 'tertiary' | 'critical' | 'icon-button'; // other possible button types: stealth, link
  size?: 'small' | 'medium';
  iconLeft?: string; // for this assignment, I'm using emojis as icons
  iconRight?: string; // for this assignment, I'm using emojis as icons
  iconButton?: string; // for this assignment, I'm using emojis as icons
  onClick?: () => void;
}
