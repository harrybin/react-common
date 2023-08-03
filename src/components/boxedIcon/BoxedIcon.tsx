import React from 'react';
import { Box, BoxProps, useTheme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useDefaultProps } from '../../utils/customHooks';

const useStyles = makeStyles()(() => ({
    box: {
        marginLeft: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
    },
}));

export interface BoxedIconProps extends BoxProps {
    icon: JSX.Element;
    color?: string;
    backgroundColor?: string;
    boxSize?: number;
    boxMargin?: number | undefined;
}

function BoxedIconComp(props: BoxedIconProps) {
    const { classes } = useStyles();
    const theme = useTheme();
    const { boxSize, boxMargin, color, backgroundColor, ...restProps } = useDefaultProps(props, {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
        boxSize: 40,
        boxMargin: parseInt(theme.spacing(1)),
    });
    const boxPadding = boxSize / 5;
    const usedBoxMargin = boxMargin === undefined ? theme.spacing(1) : boxMargin;
    return (
        <Box
            {...restProps}
            className={classes.box}
            style={{
                margin: usedBoxMargin,
                padding: boxPadding,
                width: boxSize,
                height: boxSize,
                fill: color,
                backgroundColor: backgroundColor,
            }}
        >
            {props.icon}
        </Box>
    );
}

/**
 * A component for displaying a ComplaintDetails.
 *
 * @export
 * @param {BoxedIconProps} props
 * @returns
 */
export const BoxedIcon = React.memo(BoxedIconComp);
