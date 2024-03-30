import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { PropTypes } from "prop-types";
import React, { useContext } from "react";
import { RevenueAndExpenseContext } from "../contexts/revenueAndExpenseContext";

function DeleteDialog(props) {
    const context = useContext(RevenueAndExpenseContext)

    const hide = () => {
        props.setDeleteConfirmationIsShown(false)
    }
    return (
        <Dialog onClose={hide} fullWidth={true} maxWidth='sm' open={props.open}>
            <DialogTitle>Are you sure you wish to delete this revenue ledger item?</DialogTitle>
            <DialogContent>
                { JSON.stringify(props.revenueLedger) }
            </DialogContent>
            <DialogActions>
                <Button onClick={hide}>Cancel</Button>
                <Button onClick={() => {context.deleteRevenueAndExpense({id: props.revenueLedger.id, revenueLedger: props.revenueLedger}); hide();}}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}

DeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setDeleteConfirmationIsShown: PropTypes.func.isRequired,
    revenueLedger: PropTypes.object,
};

export default DeleteDialog;