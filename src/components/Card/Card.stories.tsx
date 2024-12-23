import React from 'react';
import { Card } from './Card';
import { Button } from '../Button';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Main = {
  args: {
    title: 'Autopay',
    children: (
      <div>
        After receiving your first eBill, you can set up AutoPay to have future
        eBills paid automatically and on time. <a href="#">Learn more</a>
      </div>
    ),
  },
};

/**
 * A card with a right button.
 */
export const RightAction = {
  args: {
    title: 'Request delivery details',
    children: "We'll email your vendor to set their delivery method.",
    rightAction: <Button size="small">Send request</Button>,
  },
};
