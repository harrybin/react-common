import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BoxedIcon } from './BoxedIcon';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

export default {
    title: 'React Common Components/Components/BoxedIcon',
    component: BoxedIcon,
} as ComponentMeta<typeof BoxedIcon>;
const Template: ComponentStory<typeof BoxedIcon> = (args) => <BoxedIcon {...args} />;

export const BoxedIconStory = Template.bind({});
BoxedIconStory.args = {
    icon: <AccessAlarm></AccessAlarm>,
    borderBottom: '2px solid grey',
    borderLeft: '2px solid grey',
    borderRight: '2px solid grey',
    borderTop: '2px solid grey',
    boxShadow: '3px 3px 3px grey',
};