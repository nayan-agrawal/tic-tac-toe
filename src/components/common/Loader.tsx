import {CircularProgress, Stack} from "@mui/material";

function Loader(): JSX.Element {
    return <Stack flexDirection="row" alignItems="center" justifyContent="center" sx={{ height: "80vh" }}>
        <CircularProgress disableShrink color="success" />
    </Stack>
}

export default Loader;