import React from 'react';

export interface NameValueTextProps {
    name: string;
    value?: string | number | React.ReactElement;
    oneLine?: boolean;
    children?: React.ReactNode | React.ReactNode[];
    verticalSpacing?: string;
    /**
     * Optional custom container component for layout. 
     * If not provided, uses a simple div with flexbox.
     */
    ContainerComponent?: React.ComponentType<{ direction?: 'row' | 'column'; children: React.ReactNode }>;
    /**
     * Optional custom grid/item component for layout items.
     * If not provided, uses a simple div.
     */
    ItemComponent?: React.ComponentType<{ children: React.ReactNode }>;
    /**
     * Optional custom text component for rendering name and value text.
     * If not provided, uses native span elements.
     */
    TextComponent?: React.ComponentType<{ 
        variant?: 'body1' | 'body2'; 
        className?: string;
        children: React.ReactNode 
    }>;
    /**
     * Optional CSS classes for styling. Override default styles with your framework's classes.
     */
    classes?: {
        root?: string;
        nameValueText?: string;
        inlineBlock?: string;
        name?: string;
        value?: string;
        padding?: string;
    };
}

const defaultClasses = {
    root: '',
    nameValueText: 'nameValueText-default',
    inlineBlock: 'inlineBlock-default',
    name: 'name-default',
    value: 'value-default',
    padding: 'padding-default',
};

// Default inline styles when no classes are provided
const defaultStyles: Record<string, React.CSSProperties> = {
    nameValueText: {
        paddingRight: '32px',
        whiteSpace: 'pre-line',
    },
    inlineBlock: {
        display: 'inline-block',
    },
    name: {
        color: '#757575',
    },
    value: {
        overflowWrap: 'anywhere',
    },
    padding: {
        paddingTop: '16px',
        paddingBottom: '16px',
    },
};

const DefaultContainer: React.FC<{ direction?: 'row' | 'column'; children: React.ReactNode }> = ({ direction = 'column', children }) => (
    <div style={{ display: 'flex', flexDirection: direction }}>
        {children}
    </div>
);

const DefaultItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div>{children}</div>
);

const DefaultText: React.FC<{ variant?: 'body1' | 'body2'; className?: string; children: React.ReactNode }> = ({ children, className }) => (
    <span className={className}>{children}</span>
);

/**
 * A component for displaying name-value paired text.
 * 
 * This component is framework-agnostic. You can provide your own UI components
 * (e.g., from Material-UI, Chakra UI, or any other framework) via props.
 *
 * @export
 * @param {NameValueTextProps} props
 * @returns
 */
function NameValueTextComp(props: NameValueTextProps) {
    const {
        name,
        value,
        oneLine,
        children,
        verticalSpacing,
        ContainerComponent = DefaultContainer,
        ItemComponent = DefaultItem,
        TextComponent = DefaultText,
        classes: customClasses,
    } = props;

    const classes = customClasses || defaultClasses;
    const useDefaultStyles = !customClasses;

    const combineStyles = (baseStyle: React.CSSProperties, ...additionalStyles: (React.CSSProperties | false | undefined)[]) => {
        if (!useDefaultStyles) return undefined;
        return Object.assign({}, baseStyle, ...additionalStyles.filter(Boolean) as React.CSSProperties[]);
    };

    return (
        <div 
            className={verticalSpacing ? verticalSpacing : classes.padding}
            style={!verticalSpacing && useDefaultStyles ? defaultStyles.padding : undefined}
        >            
            <ContainerComponent direction={oneLine ? 'row' : 'column'}>
                <ItemComponent>
                    <TextComponent
                        variant="body2"
                        className={`${classes.nameValueText} ${classes.name} ${oneLine ? classes.inlineBlock : ''}`}
                    >
                        <span style={combineStyles(
                            defaultStyles.nameValueText,
                            defaultStyles.name,
                            oneLine && defaultStyles.inlineBlock
                        )}>
                            {name}
                        </span>
                    </TextComponent>
                </ItemComponent>
                <ItemComponent>
                    {typeof value === 'string' || typeof value === 'number' ? (
                        <TextComponent 
                            variant="body1" 
                            className={`${classes.nameValueText} ${classes.value}`}
                        >
                            <span style={combineStyles(defaultStyles.nameValueText, defaultStyles.value)}>
                                {value}
                            </span>
                        </TextComponent>
                    ) : (
                        <>
                            {value}
                            {children}
                        </>
                    )}
                </ItemComponent>
            </ContainerComponent>
        </div>
    );
}

const NameValueText = React.memo(NameValueTextComp);
export { NameValueText };
