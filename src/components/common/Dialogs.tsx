import {Dialog, Stack, DialogContent, Typography, DialogActions, Button} from '@mui/material';

export const WinnerDialog = (props: {
    handleClose: () => void,
    handleReload: () => void,
    open: boolean,
    content: string | null
}) => {
    return <Dialog open={props.open} fullWidth={true} maxWidth={"sm"}>
        <DialogContent>
            <Stack flexDirection="column" alignItems="center" justifyContent="center">
                <Typography variant="h4" mb={4}>
                    Congratulations!!
                </Typography>
                <img src="/assets/img/congratulations.gif" width={"60%"} alt="winner animation" />
                <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
                    {props.content}
                </Typography>
            </Stack>
        </DialogContent>
        <DialogActions sx={{p: 4}}>
            <Button variant="outlined" onClick={props.handleClose}>
                Close
            </Button>
            <Button onClick={props.handleReload} variant="contained">Play Again</Button>
        </DialogActions>
    </Dialog>
}