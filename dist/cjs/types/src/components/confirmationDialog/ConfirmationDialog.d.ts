import React from 'react';
export type ConfirmationDialogCloseHandler = (firstButtonPressed?: boolean) => void | unknown | Promise<unknown>;
export type ConfirmationDialogMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
export interface ConfirmationDialogRawProps {
    title: string;
    text: string | (() => string);
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
export declare function ConfirmationDialog(props: ConfirmationDialogRawProps): React.JSX.Element;
export declare namespace ConfirmationDialog {
    var defaultProps: {
        title: string;
        text: string;
        leftButtonLabel: string;
        rightButtonLabel: undefined;
    };
}
//# sourceMappingURL=ConfirmationDialog.d.ts.map