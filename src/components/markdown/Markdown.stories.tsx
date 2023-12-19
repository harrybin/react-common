import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Markdown } from './Markdown';

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
