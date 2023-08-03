import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Markdown } from './Markdown';

export default {
    title: 'React Common Components/Components/Markdown',
    component: Markdown,
} as ComponentMeta<typeof Markdown>;

const Template: ComponentStory<typeof Markdown> = (args) => <Markdown {...args} />;

export const MarkdownDefault = Template.bind({});
MarkdownDefault.args = {
    key: 'value',
    children: `
  #Markdown 
  ## Test
  ***
  `,
};
