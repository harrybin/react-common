import React from 'react';
export interface NameValueTextProps {
    name: string;
    value?: string | number | JSX.Element;
    oneLine?: boolean;
    children?: React.ReactNode | React.ReactNode[];
    verticalSpacing?: string;
}
/**
 * A component for displaying name-value paired text.
 *
 * @export
 * @param {NameValueTextProps} props
 * @returns
 */
declare function NameValueTextComp(props: NameValueTextProps): React.JSX.Element;
declare const NameValueText: React.MemoExoticComponent<typeof NameValueTextComp>;
export { NameValueText };
//# sourceMappingURL=NameValueText.d.ts.map