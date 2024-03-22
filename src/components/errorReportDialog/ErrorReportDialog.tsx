import { Typography, Box, TextField, Link, Grid, Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import * as React from 'react';

export const MIN_DESC_LENGTH = 10;

const useStyles = makeStyles()(() => ({
    link: {
        position: 'relative',
        left: '20px',
        bottom: 0,
    },
}));

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

const defaultErrorDescriptions: ErrorReportDescriptions = {
    descMsg:
        'Here you can send an error report. Please provide a detailed description, tell us how to reproduce the issue und fill the contact field making us able to contact you in case we have further questions.',
    descHintMsg: `A description is required (min. ${MIN_DESC_LENGTH} characters)`,
    descCaptionMsg: `Detailed description of the issue`,
    descRequiredMsg: `A description is required (min. ${MIN_DESC_LENGTH} characters)`,
    reproCaptionMsg: `How can the issue be reproduced?`,
    reproRequiredMsg: `Reproduction information is required (min. ${MIN_DESC_LENGTH} characters)`,
    emailDescMsg: 'Email',
    phoneDescMsg: 'Phone',
};

export const ErrorReportDialogComp = (props: ErrorReportDialogProps) => {
    const { classes } = useStyles();
    const [desc, setDesc] = React.useState('');
    const [repro, setRepro] = React.useState('');
    const descriptions = props.errorReportDescriptions;

    // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#removal-of-storiesof-api
    // storiesOf('BoxedIcon', module)
    //     .add('with text', () => <Button>Hello Button</Button>)
    //     .add('with some emoji', () => (
    //         <Button>
    //             <span role="img" aria-label="so cool">
    //                 😀 😎 👍 💯
    //             </span>
    //         </Button>
    //     ));

    return (
        <>
            <Box margin="20px">
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={12}>
                        <Typography>{descriptions.descMsg}</Typography>
                        <Typography color="error">{descriptions.descHintMsg}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            multiline
                            error={desc?.length < MIN_DESC_LENGTH}
                            helperText={desc?.length < MIN_DESC_LENGTH && descriptions.descRequiredMsg}
                            rows={3}
                            label={descriptions.descCaptionMsg}
                            variant="outlined"
                            value={desc}
                            onChange={(event) => {
                                setDesc(event.target.value);
                                props.descChanged && props.descChanged(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            multiline
                            error={repro?.length < MIN_DESC_LENGTH}
                            helperText={repro?.length < MIN_DESC_LENGTH && descriptions.reproRequiredMsg}
                            rows={3}
                            label={descriptions.reproCaptionMsg}
                            variant="outlined"
                            value={repro}
                            onChange={(event) => {
                                setRepro(event.target.value);
                                props.reproChanged && props.reproChanged(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label={descriptions.emailDescMsg}
                            defaultValue="bob.test@example.com"
                            variant="outlined"
                            onChange={(event) => props.mailChanged && props.mailChanged(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label={descriptions.phoneDescMsg}
                            defaultValue="01234567"
                            variant="outlined"
                            onChange={(event) => props.phoneChanged && props.phoneChanged(event.target.value)}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Typography variant="caption" hidden={false}>
                <Link
                    className={classes.link}
                    onClick={() => props.downloadClicked && props.downloadClicked()}
                    underline="hover"
                >
                    Download Report
                </Link>
            </Typography>
        </>
    );
};

ErrorReportDialogComp.defaultProps = {
    downloadClicked: () => {},
    descChanged: () => {},
    reproChanged: () => {},
    mailChanged: () => {},
    phoneChanged: () => {},
    errorReportDescriptions: defaultErrorDescriptions,
};

export const ErrorReportDialog = React.memo(ErrorReportDialogComp);


