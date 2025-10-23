import * as React from 'react';

export const MIN_DESC_LENGTH = 10;

export interface ErrorReportDescriptions {
    descMsg: string;
    descHintMsg: string;
    descCaptionMsg: string;
    descRequiredMsg: string;
    reproCaptionMsg: string;
    reproRequiredMsg: string;
    emailDescMsg: string;
    phoneDescMsg: string;
}

export interface ErrorReportDialogProps {
    /**
     * Trigger action when 'download' is clicked. E.g. generate report and save in local storage
     * @returns null
     */
    downloadClicked: () => void;
    descChanged: (text: string) => void;
    reproChanged: (text: string) => void;
    mailChanged: (text: string) => void;
    phoneChanged: (text: string) => void;
    /**
     * Provides descriptions for the dialog fields. You can provide your own ErrorDescriptions or
     * use the default descriptions
     */
    errorReportDescriptions: ErrorReportDescriptions;

    /**
     * Custom Box/Container component from your UI framework.
     */
    BoxComponent?: React.ComponentType<{
        margin?: string;
        children: React.ReactNode;
        [key: string]: any;
    }>;

    /**
     * Custom Grid container component from your UI framework.
     */
    GridContainerComponent?: React.ComponentType<{
        spacing?: number;
        children: React.ReactNode;
        [key: string]: any;
    }>;

    /**
     * Custom Grid item component from your UI framework.
     */
    GridItemComponent?: React.ComponentType<{
        size?: number;
        children: React.ReactNode;
        [key: string]: any;
    }>;

    /**
     * Custom TextField component from your UI framework.
     */
    TextFieldComponent?: React.ComponentType<{
        fullWidth?: boolean;
        multiline?: boolean;
        error?: boolean;
        helperText?: string | false;
        rows?: number;
        label?: string;
        variant?: string;
        value?: string;
        defaultValue?: string;
        onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
        [key: string]: any;
    }>;

    /**
     * Custom Typography/Text component from your UI framework.
     */
    TextComponent?: React.ComponentType<{
        color?: string;
        variant?: string;
        children: React.ReactNode;
        [key: string]: any;
    }>;

    /**
     * Custom Link component from your UI framework.
     */
    LinkComponent?: React.ComponentType<{
        onClick?: () => void;
        underline?: string;
        className?: string;
        children: React.ReactNode;
        [key: string]: any;
    }>;

    /**
     * Optional CSS classes for styling.
     */
    classes?: {
        link?: string;
    };
}

const defaultErrorDescriptions: ErrorReportDescriptions = {
    descMsg:
        'Here you can send an error report. Please provide a detailed description, tell us how to reproduce the issue und fill the contact field making us able to contact you in case we have further questions.',
    descHintMsg: `A description is required (min. ${MIN_DESC_LENGTH} characters)`,
    descCaptionMsg: `Detailed description of the issue`,
    descRequiredMsg: `A description is required (min. ${MIN_DESC_LENGTH} characters)`,
    reproCaptionMsg: `How can the issue be reproduced?`,
    reproRequiredMsg: `Reproduction information is required (min. ${MIN_DESC_LENGTH} characters)`,
    emailDescMsg: 'Email',
    phoneDescMsg: 'Phone',
};

// Default implementations
const DefaultBox: React.FC<any> = ({ margin, children, ...props }) => (
    <div style={{ margin: margin || '20px' }} {...props}>
        {children}
    </div>
);

const DefaultGridContainer: React.FC<any> = ({ spacing = 2, children, ...props }) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: `${spacing * 8}px`,
        }}
        {...props}
    >
        {children}
    </div>
);

const DefaultGridItem: React.FC<any> = ({ children, ...props }) => (
    <div {...props}>{children}</div>
);

const DefaultTextField: React.FC<any> = ({ 
    fullWidth, 
    multiline, 
    error, 
    helperText, 
    rows, 
    label, 
    value, 
    defaultValue,
    onChange,
    ...props 
}) => (
    <div style={{ width: fullWidth ? '100%' : 'auto' }}>
        {label && (
            <label
                style={{
                    display: 'block',
                    marginBottom: '4px',
                    fontSize: '0.875rem',
                    color: error ? '#d32f2f' : '#666',
                }}
            >
                {label}
            </label>
        )}
        {multiline ? (
            <textarea
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                rows={rows}
                style={{
                    width: '100%',
                    padding: '8px',
                    border: error ? '1px solid #d32f2f' : '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                }}
                {...props}
            />
        ) : (
            <input
                type="text"
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                style={{
                    width: '100%',
                    padding: '8px',
                    border: error ? '1px solid #d32f2f' : '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '1rem',
                }}
                {...props}
            />
        )}
        {helperText && (
            <div
                style={{
                    marginTop: '4px',
                    fontSize: '0.75rem',
                    color: error ? '#d32f2f' : '#666',
                }}
            >
                {helperText}
            </div>
        )}
    </div>
);

const DefaultText: React.FC<any> = ({ color, variant, children, ...props }) => (
    <div
        style={{
            color: color === 'error' ? '#d32f2f' : 'inherit',
            fontSize: variant === 'caption' ? '0.75rem' : '1rem',
        }}
        {...props}
    >
        {children}
    </div>
);

const DefaultLink: React.FC<any> = ({ onClick, className, children, ...props }) => (
    <a
        onClick={onClick}
        className={className}
        style={{
            color: '#1976d2',
            cursor: 'pointer',
            textDecoration: 'none',
        }}
        {...props}
    >
        {children}
    </a>
);

const defaultClasses = {
    link: '',
};

const defaultStyles: Record<string, React.CSSProperties> = {
    link: {
        position: 'relative',
        left: '20px',
        bottom: 0,
    },
};

export const ErrorReportDialogComp = (props: ErrorReportDialogProps) => {
    const {
        BoxComponent = DefaultBox,
        GridContainerComponent = DefaultGridContainer,
        GridItemComponent = DefaultGridItem,
        TextFieldComponent = DefaultTextField,
        TextComponent = DefaultText,
        LinkComponent = DefaultLink,
        classes: customClasses,
    } = props;

    const classes = customClasses || defaultClasses;
    const useDefaultStyles = !customClasses;

    const [desc, setDesc] = React.useState('');
    const [repro, setRepro] = React.useState('');
    const descriptions = props.errorReportDescriptions;

    return (
        <>
            <BoxComponent margin="20px">
                <GridContainerComponent spacing={2}>
                    <GridItemComponent size={12}>
                        <TextComponent>{descriptions.descMsg}</TextComponent>
                        <TextComponent color="error">{descriptions.descHintMsg}</TextComponent>
                    </GridItemComponent>
                    <GridItemComponent size={12}>
                        <TextFieldComponent
                            fullWidth
                            multiline
                            error={desc?.length < MIN_DESC_LENGTH}
                            helperText={desc?.length < MIN_DESC_LENGTH && descriptions.descRequiredMsg}
                            rows={3}
                            label={descriptions.descCaptionMsg}
                            variant="outlined"
                            value={desc}
                            onChange={(event) => {
                                setDesc(event.target.value);
                                props.descChanged && props.descChanged(event.target.value);
                            }}
                        />
                    </GridItemComponent>
                    <GridItemComponent size={12}>
                        <TextFieldComponent
                            fullWidth
                            multiline
                            error={repro?.length < MIN_DESC_LENGTH}
                            helperText={repro?.length < MIN_DESC_LENGTH && descriptions.reproRequiredMsg}
                            rows={3}
                            label={descriptions.reproCaptionMsg}
                            variant="outlined"
                            value={repro}
                            onChange={(event) => {
                                setRepro(event.target.value);
                                props.reproChanged && props.reproChanged(event.target.value);
                            }}
                        />
                    </GridItemComponent>
                    <GridItemComponent size={12}>
                        <TextFieldComponent
                            fullWidth
                            label={descriptions.emailDescMsg}
                            defaultValue="bob.test@example.com"
                            variant="outlined"
                            onChange={(event) => props.mailChanged && props.mailChanged(event.target.value)}
                        />
                    </GridItemComponent>
                    <GridItemComponent size={12}>
                        <TextFieldComponent
                            fullWidth
                            label={descriptions.phoneDescMsg}
                            defaultValue="01234567"
                            variant="outlined"
                            onChange={(event) => props.phoneChanged && props.phoneChanged(event.target.value)}
                        />
                    </GridItemComponent>
                </GridContainerComponent>
            </BoxComponent>
            <TextComponent variant="caption">
                <LinkComponent
                    className={classes.link}
                    onClick={() => props.downloadClicked && props.downloadClicked()}
                    underline="hover"
                    style={useDefaultStyles ? defaultStyles.link : undefined}
                >
                    Download Report
                </LinkComponent>
            </TextComponent>
        </>
    );
};

ErrorReportDialogComp.defaultProps = {
    downloadClicked: () => {},
    descChanged: () => {},
    reproChanged: () => {},
    mailChanged: () => {},
    phoneChanged: () => {},
    errorReportDescriptions: defaultErrorDescriptions,
};

export const ErrorReportDialog = React.memo(ErrorReportDialogComp);
