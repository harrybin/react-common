import * as React from 'react';
export interface IfProps {
    cond: boolean | string | null | undefined | unknown; //  unknown catches DTO types (interfaces)
    else?: React.ReactNode | React.ReactNode[];
    children: React.ReactNode | React.ReactNode[];
}

function IfComp(props: IfProps) {
    if (props.cond) return <>{props.children}</>;
    else return props.else ? <>{props.else}</> : <></>;
}

export const If = React.memo(IfComp);
