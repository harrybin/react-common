import React from 'react';

export type ConfirmationDialogCloseHandler = (firstButtonPressed?: boolean) => void | unknown | Promise<unknown>;
export type ConfirmationDialogMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;

export interface ConfirmationDialogRawProps {
    title: string;
    text: string | (() => string); // to be able to fill with variable async provide a function
    open: boolean;
    onClose: ConfirmationDialogCloseHandler;

    id?: string;

    /**
     * The left button caption.
     * If undefined button is not shown.
     * If empty string (''), the default caption value "Cancel" is used.
     * Default value: undefined.
     *
     * @type {string}
     */
    leftButtonLabel?: string;
    leftButtonDisabled?: boolean;
    /**
     * The right button caption.
     * If undefined button is not shown.
     * If empty string (''), the default caption value "Ok" is used.
     * Default value: '' (--> Ok).
     *
     * @type {string}
     */
    rightButtonLabel?: string;
    isRightButtonHighlighted?: boolean;
    fullScreen?: boolean;
    maxWidth?: ConfirmationDialogMaxWidth;
    children?: React.ReactNode;

    /**
     * Custom Dialog component from your UI framework.
     * Should accept: open, onClose, fullScreen, maxWidth, children props.
     */
    DialogComponent?: React.ComponentType<{
        open: boolean;
        onClose?: () => void;
        fullScreen?: boolean;
        maxWidth?: ConfirmationDialogMaxWidth;
        children: React.ReactNode;
        [key: string]: any;
    }>;

    /**
     * Custom DialogTitle component from your UI framework.
     */
    DialogTitleComponent?: React.ComponentType<{
        className?: string;
        children: React.ReactNode;
        [key: string]: any;
    }>;

    /**
     * Custom DialogContent component from your UI framework.
     */
    DialogContentComponent?: React.ComponentType<{
        dividers?: boolean;
        className?: string;
        children: React.ReactNode;
        [key: string]: any;
    }>;

    /**
     * Custom DialogActions component from your UI framework.
     */
    DialogActionsComponent?: React.ComponentType<{
        children: React.ReactNode;
        [key: string]: any;
    }>;

    /**
     * Custom Button component from your UI framework.
     */
    ButtonComponent?: React.ComponentType<{
        id?: string;
        onClick?: () => void;
        color?: 'primary' | 'secondary' | 'inherit';
        variant?: 'text' | 'contained' | 'outlined';
        disabled?: boolean;
        autoFocus?: boolean;
        children: React.ReactNode;
        [key: string]: any;
    }>;

    /**
     * Custom Typography/Text component from your UI framework.
     */
    TextComponent?: React.ComponentType<{
        children: React.ReactNode;
        [key: string]: any;
    }>;

    /**
     * Optional CSS classes for styling.
     */
    classes?: {
        header?: string;
        dialogContent?: string;
        dialogContentFull?: string;
    };
}

// Default implementations
const DefaultDialog: React.FC<any> = ({ open, children, fullScreen, maxWidth, ...props }) => {
    if (!open) return null;
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1300,
            }}
            {...props}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    maxWidth: fullScreen ? '100%' : maxWidth === 'xs' ? '444px' : maxWidth === 'sm' ? '600px' : maxWidth === 'md' ? '960px' : maxWidth === 'lg' ? '1280px' : '1920px',
                    width: fullScreen ? '100%' : '90%',
                    maxHeight: fullScreen ? '100%' : '90vh',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {children}
            </div>
        </div>
    );
};

const DefaultDialogTitle: React.FC<any> = ({ children, className, ...props }) => (
    <div
        className={className}
        style={{
            padding: '16px 24px',
            fontSize: '1.25rem',
            fontWeight: 500,
        }}
        {...props}
    >
        {children}
    </div>
);

const DefaultDialogContent: React.FC<any> = ({ children, className, dividers, ...props }) => (
    <div
        className={className}
        style={{
            padding: '8px',
            flex: 1,
            overflowY: 'auto',
            borderTop: dividers ? '1px solid rgba(0, 0, 0, 0.12)' : undefined,
            borderBottom: dividers ? '1px solid rgba(0, 0, 0, 0.12)' : undefined,
        }}
        {...props}
    >
        {children}
    </div>
);

const DefaultDialogActions: React.FC<any> = ({ children, ...props }) => (
    <div
        style={{
            padding: '8px',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '8px',
        }}
        {...props}
    >
        {children}
    </div>
);

const DefaultButton: React.FC<any> = ({ children, onClick, variant = 'text', color = 'primary', disabled, autoFocus, id, ...props }) => (
    <button
        id={id}
        onClick={onClick}
        disabled={disabled}
        autoFocus={autoFocus}
        style={{
            padding: '6px 16px',
            fontSize: '0.875rem',
            minWidth: '64px',
            borderRadius: '4px',
            border: variant === 'outlined' ? '1px solid currentColor' : 'none',
            backgroundColor: variant === 'contained' ? (color === 'primary' ? '#1976d2' : '#dc004e') : 'transparent',
            color: variant === 'contained' ? 'white' : (color === 'primary' ? '#1976d2' : '#dc004e'),
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            textTransform: 'uppercase',
            fontWeight: 500,
        }}
        {...props}
    >
        {children}
    </button>
);

const DefaultText: React.FC<any> = ({ children, ...props }) => (
    <p style={{ margin: 0 }} {...props}>{children}</p>
);

const defaultClasses = {
    header: '',
    dialogContent: '',
    dialogContentFull: '',
};

const defaultStyles: Record<string, React.CSSProperties> = {
    header: {
        background: '#1976d2',
        color: 'white',
    },
    dialogContent: {
        padding: '8px',
    },
    dialogContentFull: {
        padding: '0',
    },
};

export function ConfirmationDialog(props: ConfirmationDialogRawProps) {
    const {
        title,
        text,
        onClose,
        open,
        leftButtonLabel: okLabel,
        rightButtonLabel: cancelLabel,
        isRightButtonHighlighted,
        DialogComponent = DefaultDialog,
        DialogTitleComponent = DefaultDialogTitle,
        DialogContentComponent = DefaultDialogContent,
        DialogActionsComponent = DefaultDialogActions,
        ButtonComponent = DefaultButton,
        TextComponent = DefaultText,
        classes: customClasses,
        ...other
    } = props;

    const classes = customClasses || defaultClasses;
    const useDefaultStyles = !customClasses;

    const handleCancel = () => {
        if (onClose) onClose(false);
    };

    const handleOk = () => {
        if (onClose) onClose(true);
    };

    return (
        <DialogComponent
            open={open}
            onClose={undefined}
            fullScreen={props.fullScreen}
            maxWidth={props.maxWidth ?? 'xs'}
            aria-labelledby="confirmation-dialog-title"
            {...other}
        >
            <DialogTitleComponent 
                id="confirmation-dialog-title" 
                className={classes.header}
                style={useDefaultStyles ? defaultStyles.header : undefined}
            >
                {title}
            </DialogTitleComponent>
            <DialogContentComponent 
                dividers 
                className={props.fullScreen ? classes.dialogContentFull : classes.dialogContent}
                style={useDefaultStyles ? (props.fullScreen ? defaultStyles.dialogContentFull : defaultStyles.dialogContent) : undefined}
            >
                {text && <TextComponent>{typeof text === 'string' ? text : text()}</TextComponent>}
                {props.children}
            </DialogContentComponent>
            <DialogActionsComponent>
                {okLabel !== undefined && (
                    <ButtonComponent
                        id="button_confirmOk"
                        onClick={handleOk}
                        color="primary"
                        variant={isRightButtonHighlighted ? 'text' : 'contained'}
                        disabled={props.leftButtonDisabled}
                    >
                        {okLabel !== '' ? okLabel : 'common_ok'}
                    </ButtonComponent>
                )}
                {cancelLabel !== undefined && (
                    <ButtonComponent
                        id="button_confirmCancel"
                        variant={isRightButtonHighlighted ? 'contained' : 'text'}
                        autoFocus
                        onClick={handleCancel}
                        color="primary"
                    >
                        {cancelLabel !== '' ? cancelLabel : 'common_cancel'}
                    </ButtonComponent>
                )}
            </DialogActionsComponent>
        </DialogComponent>
    );
}

ConfirmationDialog.defaultProps = {
    title: '',
    text: '',
    leftButtonLabel: '',
    rightButtonLabel: undefined,
};

// usage:  <ConfirmationDialog open={open} title="Save?" text="Wirklich?" onClose={handleClose} />
