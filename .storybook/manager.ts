import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
    theme: {
        base: themes.dark,
        brandTitle: 'harrybin react-common',
        brandUrl: 'https://harrybin.github.io/react-common',
        brandImage: 'https://harrybin.de/assets/logo.png.webp',
        brandTarget: '_self',
    },
});
