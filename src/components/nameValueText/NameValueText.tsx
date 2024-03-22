import { Typography, Theme, Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React from 'react';
import { cx } from '@emotion/css';

const useStyles = makeStyles()((theme: Theme) => ({
    nameValueText: {
        paddingRight: theme.spacing(4),
        whiteSpace: 'pre-line', //do text wrap into several lines
    },
    inlineBlock: {
        display: 'inline-block',
    },
    name: {
        color: theme.palette.grey[600],
    },
    value: {
        overflowWrap: 'anywhere',
    },
    padding: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
}));

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
function NameValueTextComp(props: NameValueTextProps) {
    const { classes } = useStyles();
    return (
        <div className={props.verticalSpacing ? props.verticalSpacing : classes.padding}>            
            <Grid container direction={props.oneLine ? 'row' : 'column'}>
                <Grid item>
                    <Typography
                        variant="body2"
                        className={cx(classes.nameValueText, classes.name, props.oneLine && classes.inlineBlock)}
                    >
                        {props.name}
                    </Typography>
                </Grid>
                <Grid item>
                    {typeof props.value === 'string' ? (
                        <Typography variant="body1" className={cx(classes.nameValueText, classes.value)}>
                            {props.value}
                        </Typography>
                    ) : (
                        <>
                            {props.value}
                            {props.children}
                        </>
                    )}
                </Grid>
            </Grid>
        </div>
    );
}
const NameValueText = React.memo(NameValueTextComp);
export { NameValueText };
