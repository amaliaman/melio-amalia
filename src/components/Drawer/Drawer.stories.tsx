import React from 'react';
import { Card } from '../Card';
import { Drawer } from './Drawer';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Main = {
  args: {
    title: 'Vendor details',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcu est. Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum tellus. Aenean sed nibh lorem.',
  },
};

/**
 * A drawer with some contents.
 */
export const Contents = {
  args: {
    title: 'This is a drawer',
    children: (
      <div>
        <Card title="Autopay">
          <div>
            After receiving your first eBill, you can set up AutoPay to have
            future eBills paid automatically and on time.{' '}
            <a href="#">Learn more</a>
          </div>
        </Card>

        <br />

        <Card title="Autopay">
          <div>
            After receiving your first eBill, you can set up AutoPay to have
            future eBills paid automatically and on time.{' '}
            <a href="#">Learn more</a>
          </div>
        </Card>

        <br />

        <Card title="Autopay">
          <div>
            After receiving your first eBill, you can set up AutoPay to have
            future eBills paid automatically and on time.{' '}
            <a href="#">Learn more</a>
          </div>
        </Card>
      </div>
    ),
  },
};
