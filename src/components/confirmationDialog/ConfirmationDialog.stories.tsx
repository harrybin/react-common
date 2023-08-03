import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConfirmationDialog } from './ConfirmationDialog';

export default {
    title: 'React Common Components/Components/Confirmation Dialog',
    component: ConfirmationDialog,
} as ComponentMeta<typeof ConfirmationDialog>;
const Template: ComponentStory<typeof ConfirmationDialog> = (args) => <ConfirmationDialog {...args} />;

export const ConfirmationDialogStory = Template.bind({});
ConfirmationDialogStory.args = {
    open: false,
    title: 'Confirmation Dialog',
    text: 'Are you sure?',
    leftButtonLabel: 'Ok',
    rightButtonLabel: 'Cancel',
};
