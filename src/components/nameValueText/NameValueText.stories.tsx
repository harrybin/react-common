import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NameValueText } from './NameValueText';

export default {
    title: 'React Common Components/Components/NameValueText',
    component: NameValueText,
} as ComponentMeta<typeof NameValueText>;

const Template: ComponentStory<typeof NameValueText> = (args) => <NameValueText {...args} />;

export const NameValueTextStory = Template.bind({});
NameValueTextStory.args = {
    name: 'Name',
    value: 'Bob',
    oneLine: true,
};
