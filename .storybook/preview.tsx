import type { Preview } from '@storybook/react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { themes } from '@storybook/theming';

// Create a simple MUI theme for Storybook
const muiTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
    },
});

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            theme: themes.dark,
        },
    },
};

export default preview;

export const withMuiTheme = (Story) => (
    <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Story />
    </ThemeProvider>
);

export const decorators = [withMuiTheme];
