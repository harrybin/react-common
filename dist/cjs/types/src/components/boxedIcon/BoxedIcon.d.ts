import React from 'react';
import { BoxProps } from '@mui/material';
export interface BoxedIconProps extends BoxProps {
    icon: JSX.Element;
    color?: string;
    backgroundColor?: string;
    boxSize?: number;
    boxMargin?: number | undefined;
}
declare function BoxedIconComp(props: BoxedIconProps): React.JSX.Element;
/**
 * A component for displaying a ComplaintDetails.
 *
 * @export
 * @param {BoxedIconProps} props
 * @returns
 */
export declare const BoxedIcon: React.MemoExoticComponent<typeof BoxedIconComp>;
export {};
//# sourceMappingURL=BoxedIcon.d.ts.map