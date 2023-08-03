import React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import { Typography, Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: Theme) => ({
    header: {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    dialogContent: {
        padding: theme.spacing(1),
    },
    dialogContentFull: {
        padding: theme.spacing(0),
    },
}));

export type ConfirmationDialogCloseHandler = (firstButtonPressed?: boolean) => void | unknown | Promise<unknown>;
export type ConfirmationDialogMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
export interface ConfirmationDialogRawProps {
    title: string;
    text: string | (() => string); // to be able to fill with variable async provide a funciton
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
}

export function ConfirmationDialog(props: ConfirmationDialogRawProps) {
    const { classes } = useStyles();

    const {
        title,
        text,
        onClose,
        open,
        leftButtonLabel: okLable,
        rightButtonLabel: cancelLable,
        isRightButtonHighlighted,
        ...other
    } = props;

    const handleCancel = () => {
        if (onClose) onClose(false);
    };

    const handleOk = () => {
        if (onClose) onClose(true);
    };

    return (
        <Dialog
            disableEscapeKeyDown
            fullScreen={props.fullScreen}
            maxWidth={props.maxWidth ?? 'xs'}
            aria-labelledby="confirmation-dialog-title"
            open={open}
            onClose={undefined}
            {...other}
        >
            <DialogTitle id="confirmation-dialog-title" className={classes.header}>
                {title}
            </DialogTitle>
            <DialogContent dividers className={props.fullScreen ? classes.dialogContentFull : classes.dialogContent}>
                {text && <Typography>{typeof text === 'string' ? text : text()}</Typography>}
                {props.children}
            </DialogContent>
            <DialogActions>
                {okLable !== undefined && (
                    <Button
                        id="button_confirmOk"
                        onClick={handleOk}
                        color="primary"
                        variant={props.isRightButtonHighlighted ? 'text' : 'contained'}
                        disabled={props.leftButtonDisabled}
                    >
                        {okLable !== '' ? okLable : 'common_ok'}
                    </Button>
                )}
                {cancelLable !== undefined && (
                    <Button
                        id="button_confirmCancel"
                        variant={props.isRightButtonHighlighted ? 'contained' : 'text'}
                        autoFocus
                        onClick={handleCancel}
                        color="primary"
                    >
                        {cancelLable !== '' ? cancelLable : 'common_cancel'}
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
}

ConfirmationDialog.defaultProps = {
    title: '',
    text: '',
    leftButtonLabel: '',
    rightButtonLabel: undefined,
};

// usage:  <ConfirmationDialog open={open} title="Save?" text="Wirklich?" onClose={handleClose} />
