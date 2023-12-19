import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ConfirmationDialog } from './ConfirmationDialog';

export default {
    title: 'React Common Components/Components/Confirmation Dialog',
    component: ConfirmationDialog,
} as Meta<typeof ConfirmationDialog>;
const Template: StoryFn<typeof ConfirmationDialog> = (args) => <ConfirmationDialog {...args} />;

export const ConfirmationDialogStory = Template.bind({});
ConfirmationDialogStory.args = {
    open: false,
    title: 'Confirmation Dialog',
    text: 'Are you sure?',
    leftButtonLabel: 'Ok',
    rightButtonLabel: 'Cancel',
};
