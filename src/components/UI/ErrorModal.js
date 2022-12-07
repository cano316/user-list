import React from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onDismiss}></div>;
}

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onDismiss}>Okay</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {createPortal(<Backdrop onDismiss={props.onDismiss} />, document.getElementById("backdrop-root"))}
            {createPortal(<ModalOverlay title={props.title} message={props.message} onDismiss={props.onDismiss} />, document.getElementById("overlay-root"))}
        </React.Fragment>
    );
};

export default ErrorModal;