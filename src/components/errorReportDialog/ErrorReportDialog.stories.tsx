import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ErrorReportDialog } from './ErrorReportDialog';

export default {
    title: 'React Common Components/Components/Error Report Dialog',
    component: ErrorReportDialog,
} as Meta<typeof ErrorReportDialog>;
const TemplateErrorReport: StoryFn<typeof ErrorReportDialog> = (args) => <ErrorReportDialog {...args} />;

export const ErrorReportDialogStoryDefault = TemplateErrorReport.bind({});
