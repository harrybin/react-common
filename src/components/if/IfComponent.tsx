import * as React from 'react';
export interface IfProps {
    cond: boolean | string | null | undefined | unknown; //  unknown catches DTO types (interfaces)
    else?: React.ReactNode | React.ReactNode[];
    children: React.ReactNode | React.ReactNode[];
}

function IfComp(props: IfProps) {
    if (props.cond) return <>{props.children}</>;
    else return props.else ? <>{props.else}</> : <></>;
    //return (props.cond ? <>{props.children}</> : <>{props.else}</>);
    // return (
    //     <>
    //         {props.cond && <>{props.children}</>}
    //         {!props.cond && <>{props.else}</>}  //does now work for "0"
    //     </>
    // );
}

export const If = React.memo(IfComp);
