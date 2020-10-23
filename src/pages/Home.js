import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LoginButton from "../components/LoginButton";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            alignItems: 'center',
        },
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
        position: "relative",
        top: 200,
        left: 300,
        height: "100%",
        width: "100%",
        alignItems: "center"
    },
}));

export default function FormPropsTextFields() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.container}>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Date Location"
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Date Day"
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Date Time"
                    variant="outlined"
                />
            </div>
            <Button type="submit" variant="contained" color="primary">Schedule</Button>
            </div>
        </form>
    );
}