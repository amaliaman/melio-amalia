import React from 'react';
import { Card } from '../Card';
import { Drawer } from './Drawer';
import { useDisclosure } from '@reactuses/core';
import { Button } from '../Button';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const args = {
    title: 'Vendor details',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcu est. Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum tellus. Aenean sed nibh lorem.',
    isOpen,
    onClose,
  };

  return (
    <>
      {!isOpen && (
        <Button type="tertiary" size="small" onClick={onOpen}>
          Open Drawer
        </Button>
      )}

      <Drawer {...args} />
    </>
  );
};

/**
 * A drawer with some contents.
 */
export const Contents = {
  args: {
    isOpen: true,
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
