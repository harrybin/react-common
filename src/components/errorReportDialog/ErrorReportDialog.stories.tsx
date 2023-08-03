import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ErrorReportDialog } from './ErrorReportDialog';

export default {
    title: 'React Common Components/Components/Error Report Dialog',
    component: ErrorReportDialog,
} as ComponentMeta<typeof ErrorReportDialog>;
const TemplateErrorReport: ComponentStory<typeof ErrorReportDialog> = (args) => <ErrorReportDialog {...args} />;

export const ErrorReportDialogStoryDefault = TemplateErrorReport.bind({});
