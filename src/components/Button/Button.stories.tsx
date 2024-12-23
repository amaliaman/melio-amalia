import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Main = {
  args: {
    children: 'Button',
  },
};

/**
 * A primary button with a left icon and an event.
 */
export const Primary = {
  args: {
    type: 'primary',
    children: 'Primary button',
    onClick: () => alert('Button clicked!'),
    iconLeft: '➡️',
  },
};

/**
 * A tertiary button with a right icon.
 */
export const Tertiary = {
  args: {
    type: 'tertiary',
    children: 'Tertiary button',
    iconRight: '⬇️',
  },
};

/**
 * A critical button.
 */
export const Critical = {
  args: {
    type: 'critical',
    children: 'Critical',
  },
};

/**
 * An icon button.
 */
export const IconButton = {
  args: {
    type: 'icon-button',
    iconButton: '🌸',
    onClick: () => alert('Icon button clicked!'),
  },
};
