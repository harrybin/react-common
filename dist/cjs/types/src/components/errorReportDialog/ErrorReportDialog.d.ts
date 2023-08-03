import * as React from 'react';
export declare const MIN_DESC_LENGTH = 10;
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
}
export declare const ErrorReportDialogComp: {
    (props: ErrorReportDialogProps): React.JSX.Element;
    defaultProps: {
        downloadClicked: () => void;
        descChanged: () => void;
        reproChanged: () => void;
        mailChanged: () => void;
        phoneChanged: () => void;
        errorReportDescriptions: ErrorReportDescriptions;
    };
};
export declare const ErrorReportDialog: React.MemoExoticComponent<{
    (props: ErrorReportDialogProps): React.JSX.Element;
    defaultProps: {
        downloadClicked: () => void;
        descChanged: () => void;
        reproChanged: () => void;
        mailChanged: () => void;
        phoneChanged: () => void;
        errorReportDescriptions: ErrorReportDescriptions;
    };
}>;
//# sourceMappingURL=ErrorReportDialog.d.ts.map