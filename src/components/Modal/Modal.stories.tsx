import { Modal } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Main = {
  args: {
    title: 'Modal header',
    icon: '🔴',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcu est. Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum tellus. Aenean sed nibh lorem.',
    actionTitle: 'Delete',
    handleAction: () => alert('Delete clicked!'),
    cancelTitle: 'Cancel',
    handleCancel: () => alert('Cancel clicked!'),
  },
};

/**
 * A modal without an icon.
 */
export const NoIcon = {
  args: {
    title: 'No icon here',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcu est. Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum tellus. Aenean sed nibh lorem.',
    actionTitle: 'Delete',
    handleAction: () => alert('Delete clicked!'),
    cancelTitle: 'Cancel',
    handleCancel: () => alert('Cancel clicked!'),
  },
};

/**
 * A modal without an X button.
 */
export const NoCloseButton = {
  args: {
    isClose: false,
    title: 'No close button here',
    icon: '🔵',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcu est. Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum tellus. Aenean sed nibh lorem.',
    actionTitle: 'Delete',
    handleAction: () => alert('Delete clicked!'),
    cancelTitle: 'Cancel',
    handleCancel: () => alert('Cancel clicked!'),
  },
};

/**
 * A Modal Without a footer.
 */
export const NoFooter = {
  args: {
    isFooter: false,
    icon: '🟢',
    title: 'No footer here',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcu est. Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum tellus. Aenean sed nibh lorem.',
  },
};
