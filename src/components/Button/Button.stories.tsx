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
    label: 'Button',
  },
};

/**
 * A primary button with a left icon and an event.
 */
export const Primary = {
  args: {
    type: 'primary',
    label: 'Primary button',
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
    label: 'Tertiary button',
    iconRight: '⬇️',
  },
};

/**
 * A critical button.
 */
export const Critical = {
  args: {
    type: 'critical',
    label: 'Critical',
  },
};
