import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ErrorReportDialog } from './ErrorReportDialog';
import { TextField, Typography, Grid, Box, Link } from '@mui/material';

export default {
    title: 'React Common Components/Components/Error Report Dialog',
    component: ErrorReportDialog,
} as Meta<typeof ErrorReportDialog>;

const TemplateErrorReport: StoryFn<typeof ErrorReportDialog> = (args) => <ErrorReportDialog {...args} />;

export const ErrorReportDialogStoryDefault = TemplateErrorReport.bind({});

export const WithMuiComponents = TemplateErrorReport.bind({});
WithMuiComponents.args = {
    BoxComponent: Box,
    GridContainerComponent: Grid,
    GridItemComponent: Grid,
    TextFieldComponent: TextField,
    TextComponent: Typography,
    LinkComponent: Link,
};
