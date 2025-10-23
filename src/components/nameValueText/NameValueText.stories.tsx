import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NameValueText } from './NameValueText';
import { Typography, Grid } from '@mui/material';

export default {
    title: 'React Common Components/Components/NameValueText',
    component: NameValueText,
} as ComponentMeta<typeof NameValueText>;

// MUI wrapper components for storybook
const MuiContainer: React.FC<{ direction?: 'row' | 'column'; children: React.ReactNode }> = ({ direction, children }) => (
    <Grid container direction={direction}>
        {children}
    </Grid>
);

const MuiItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Grid>{children}</Grid>
);

const MuiText: React.FC<{ variant?: 'body1' | 'body2'; className?: string; children: React.ReactNode }> = ({ variant, className, children }) => (
    <Typography variant={variant} className={className}>{children}</Typography>
);

const Template: ComponentStory<typeof NameValueText> = (args) => <NameValueText {...args} />;

export const NameValueTextStory = Template.bind({});
NameValueTextStory.args = {
    name: 'Name',
    value: 'Bob',
    oneLine: true,
};

export const WithMuiComponents = Template.bind({});
WithMuiComponents.args = {
    name: 'User',
    value: 'Alice Smith',
    oneLine: false,
    ContainerComponent: MuiContainer,
    ItemComponent: MuiItem,
    TextComponent: MuiText,
};
