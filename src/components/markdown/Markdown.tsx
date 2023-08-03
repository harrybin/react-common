// copied and adjusted (TS) from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/blog/Markdown.js
// referencing https://github.com/remarkjs/react-markdown
import ReactMarkdown, { MarkdownToJSX } from 'markdown-to-jsx';
import { Theme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Link from '@mui/material/Link';
import _ from 'lodash';
import React from 'react';

const useStyles = makeStyles()((theme: Theme) => ({
    listItem: {
        marginTop: theme.spacing(1),
    },
}));

export interface MarkdownProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
    children: string;
    options?: MarkdownToJSX.Options;
}

export function Markdown(props: MarkdownProps) {
    const { classes } = useStyles();

    const options: MarkdownToJSX.Options = {
        overrides: {
            h1: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'h5',
                },
            },
            h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
            h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1' } },
            h4: {
                component: Typography,
                props: { gutterBottom: true, variant: 'caption', paragraph: true },
            },
            p: { component: Typography, props: { paragraph: true } },
            a: { component: Link },
            li: {
                component: (liProps: TypographyProps) => (
                    <li className={classes.listItem}>
                        <Typography {...liProps} />
                    </li>
                ),
            },
        },
    };
    const { options: passedOpt, ...restProps } = props;
    const mergedOptions = _.merge(options, passedOpt);
    return <ReactMarkdown options={mergedOptions} {...restProps} />;
}
