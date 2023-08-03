import * as React from 'react';
export interface IfProps {
    cond: boolean | string | null | undefined | unknown;
    else?: React.ReactNode | React.ReactNode[];
    children: React.ReactNode | React.ReactNode[];
}
declare function IfComp(props: IfProps): React.JSX.Element;
export declare const If: React.MemoExoticComponent<typeof IfComp>;
export {};
//# sourceMappingURL=IfComponent.d.ts.map