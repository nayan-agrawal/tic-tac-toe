import {Dialog, DialogTitle, DialogContent, Typography, DialogActions, Button} from '@mui/material';

export const WinnerDialog = (props: {
    handleClose: () => void,
    handleReload: () => void,
    open: boolean,
    content: string
}) => {
    return <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>
            Congratulations!!
        </DialogTitle>
        <DialogContent>
            <Typography variant="h5">
                {props.content}
            </Typography>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.handleReload} autoFocus>Play Again</Button>
            <Button onClick={props.handleClose}>
                Close
            </Button>
        </DialogActions>
    </Dialog>
}