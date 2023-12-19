import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BoxedIcon } from './BoxedIcon';
import { AccessAlarm } from '@mui/icons-material';

export default {
    title: 'React Common Components/Components/BoxedIcon',
    component: BoxedIcon,
} as Meta<typeof BoxedIcon>;
const Template: StoryFn<typeof BoxedIcon> = (args) => <BoxedIcon {...args} />;

export const BoxedIconStory = Template.bind({});
BoxedIconStory.args = {
    icon: <AccessAlarm></AccessAlarm>,
    borderBottom: '2px solid grey',
    borderLeft: '2px solid grey',
    borderRight: '2px solid grey',
    borderTop: '2px solid grey',
    boxShadow: '3px 3px 3px grey',
};
