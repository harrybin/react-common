import remarkGfm from 'remark-gfm';
import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    //staticDirs: ['/some/assets'],
    managerHead: (head) => `
    ${head}
    <link rel="icon" type="image/svg+xml" href="https://harrybin.de/favicon.svg">
    `,
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-docs',
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm],
                    },
                },
            },
        },
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: true,
    },
};
export default config;
