import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Markdown } from './Markdown';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default {
    title: 'React Common Components/Components/Markdown',
    component: Markdown,
} as Meta<typeof Markdown>;

const Template: StoryFn<typeof Markdown> = (args) => <Markdown {...args} />;

export const MarkdownDefault = Template.bind({});
MarkdownDefault.args = {
    key: 'value',
    children: `
  #Markdown 
  ## Test
  ***
  `,
};

export const WithMuiComponents = Template.bind({});
WithMuiComponents.args = {
    children: `
# Markdown with MUI
## This uses Material-UI Typography
This is a paragraph with a [link](https://example.com).
- List item 1
- List item 2
  `,
    TextComponent: Typography,
    LinkComponent: Link,
};
