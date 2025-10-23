import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ConfirmationDialog } from './ConfirmationDialog';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import { Typography } from '@mui/material';

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

export const WithMuiComponents = Template.bind({});
WithMuiComponents.args = {
    open: true,
    title: 'Confirmation with MUI',
    text: 'This dialog uses Material-UI components',
    leftButtonLabel: 'Confirm',
    rightButtonLabel: 'Cancel',
    DialogComponent: Dialog,
    DialogTitleComponent: DialogTitle,
    DialogContentComponent: DialogContent,
    DialogActionsComponent: DialogActions,
    ButtonComponent: Button,
    TextComponent: Typography,
};
