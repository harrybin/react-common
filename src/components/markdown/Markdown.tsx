// copied and adjusted (TS) from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/blog/Markdown.js
// referencing https://github.com/remarkjs/react-markdown
import ReactMarkdown, { MarkdownToJSX } from 'markdown-to-jsx';
import _ from 'lodash';
import React from 'react';

export interface MarkdownProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
    children: string;
    options?: MarkdownToJSX.Options;
    
    /**
     * Custom Typography/Text component from your UI framework.
     * Will be used for h1, h2, h3, h4, p elements.
     */
    TextComponent?: React.ComponentType<{
        variant?: string;
        gutterBottom?: boolean;
        paragraph?: boolean;
        children: React.ReactNode;
        [key: string]: any;
    }>;

    /**
     * Custom Link component from your UI framework.
     */
    LinkComponent?: React.ComponentType<{
        href?: string;
        children: React.ReactNode;
        [key: string]: any;
    }>;

    /**
     * Optional CSS classes for styling.
     */
    classes?: {
        listItem?: string;
    };
}

// Default implementations
const DefaultText: React.FC<any> = ({ variant, gutterBottom, paragraph, children, ...props }) => {
    const styles: React.CSSProperties = {
        marginBottom: gutterBottom ? '0.35em' : paragraph ? '16px' : undefined,
        fontSize: 
            variant === 'h5' ? '1.5rem' :
            variant === 'h6' ? '1.25rem' :
            variant === 'subtitle1' ? '1rem' :
            variant === 'caption' ? '0.75rem' : '1rem',
        fontWeight: 
            variant === 'h5' || variant === 'h6' ? 500 : 400,
    };
    return <div style={styles} {...props}>{children}</div>;
};

const DefaultLink: React.FC<any> = ({ children, ...props }) => (
    <a style={{ color: '#1976d2', textDecoration: 'none' }} {...props}>
        {children}
    </a>
);

const defaultClasses = {
    listItem: '',
};

const defaultStyles: Record<string, React.CSSProperties> = {
    listItem: {
        marginTop: '8px',
    },
};

export function Markdown(props: MarkdownProps) {
    const {
        TextComponent = DefaultText,
        LinkComponent = DefaultLink,
        classes: customClasses,
        options: passedOpt,
        ...restProps
    } = props;

    const classes = customClasses || defaultClasses;
    const useDefaultStyles = !customClasses;

    const options: MarkdownToJSX.Options = {
        overrides: {
            h1: {
                component: TextComponent,
                props: {
                    gutterBottom: true,
                    variant: 'h5',
                },
            },
            h2: { component: TextComponent, props: { gutterBottom: true, variant: 'h6' } },
            h3: { component: TextComponent, props: { gutterBottom: true, variant: 'subtitle1' } },
            h4: {
                component: TextComponent,
                props: { gutterBottom: true, variant: 'caption', paragraph: true },
            },
            p: { component: TextComponent, props: { paragraph: true } },
            a: { component: LinkComponent },
            li: {
                component: (liProps: any) => (
                    <li 
                        className={classes.listItem}
                        style={useDefaultStyles ? defaultStyles.listItem : undefined}
                    >
                        <TextComponent {...liProps} />
                    </li>
                ),
            },
        },
    };

    const mergedOptions = _.merge(options, passedOpt);
    return <ReactMarkdown options={mergedOptions} {...restProps} />;
}
