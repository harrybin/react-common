import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { If } from './IfComponent';
import { Alert } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'React Common Components/Components/If',
    component: If,
    argTypes: {
        cond: { control: 'boolean' },
    },
} as ComponentMeta<typeof If>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof If> = (args) => <If {...args} />;

export const IfStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IfStory.args = {
    cond: true,
    else: <Alert severity="error">Condition is false</Alert>,
    children: <Alert severity="success">Condition is true</Alert>,
};
