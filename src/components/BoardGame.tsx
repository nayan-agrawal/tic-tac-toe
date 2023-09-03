import React, {Fragment, useState} from "react";
import {Box, Card, CardContent, Snackbar, Alert as MuiAlert} from "@mui/material"
import Icon from "./common/Icon";
import styled from "@emotion/styled";
import {AlertProps} from '@mui/material/Alert';
import {WinnerDialog} from "./common/Dialogs";

const itemArray: any[] = new Array(9).fill("empty");

const BoardLayout = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

const PlayBox = styled(CardContent)`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function BoardGame(): JSX.Element {
    const [isCross, setIsCross] = useState<boolean>(false);
    const [winMessage, setWinMessage] = useState<string | null>("");
    const [open, setOpen] = useState<boolean>(false);
    const [winnerDialog, setWinnerDialog] = useState<boolean>(false);
    const [message, setMessage] = useState<string | null>("");

    const changeItem = (itemNumber: number) => {
        if (itemArray[itemNumber] === "empty") {
            itemArray[itemNumber] = isCross ? "cross" : "circle";
            setIsCross(!isCross);
        } else {
            setOpen(true);
            setMessage("Already filled");
            return;
        }

        checkIsWinner();
    };

    const reloadGame = () => {
        setIsCross(false);
        setWinMessage("");
        itemArray.fill("empty", 0, 9);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const checkIsWinner = () => {
        //  checking  winner of the game
        if (
            itemArray[0] === itemArray[1] &&
            itemArray[0] === itemArray[2] &&
            itemArray[0] !== "empty"
        ) {
            setWinMessage(`${itemArray[0]} won`);
            setWinnerDialog(true);
        } else if (
            itemArray[3] !== "empty" &&
            itemArray[3] === itemArray[4] &&
            itemArray[4] === itemArray[5]
        ) {
            setWinMessage(`${itemArray[3]} won`);
            setWinnerDialog(true);
        } else if (
            itemArray[6] !== "empty" &&
            itemArray[6] === itemArray[7] &&
            itemArray[7] === itemArray[8]
        ) {
            setWinMessage(`${itemArray[6]} won`);
            setWinnerDialog(true);
        } else if (
            itemArray[0] !== "empty" &&
            itemArray[0] === itemArray[3] &&
            itemArray[3] === itemArray[6]
        ) {
            setWinMessage(`${itemArray[0]} won`);
            setWinnerDialog(true);
        } else if (
            itemArray[1] !== "empty" &&
            itemArray[1] === itemArray[4] &&
            itemArray[4] === itemArray[7]
        ) {
            setWinMessage(`${itemArray[1]} won`);
            setWinnerDialog(true);
        } else if (
            itemArray[2] !== "empty" &&
            itemArray[2] === itemArray[5] &&
            itemArray[5] === itemArray[8]
        ) {
            setWinMessage(`${itemArray[2]} won`);
            setWinnerDialog(true);
        } else if (
            itemArray[0] !== "empty" &&
            itemArray[0] === itemArray[4] &&
            itemArray[4] === itemArray[8]
        ) {
            setWinMessage(`${itemArray[0]} won`);
            setWinnerDialog(true);
        } else if (
            itemArray[2] !== "empty" &&
            itemArray[2] === itemArray[4] &&
            itemArray[4] === itemArray[6]
        ) {
            setWinMessage(`${itemArray[2]} won`);
            setWinnerDialog(true);
        }
    };

    return <Fragment>
        <BoardLayout>
            {itemArray.map((item, index) => (
                <Card onClick={() => changeItem(index)} key={index}>
                    <PlayBox>
                        <Icon name={item}/>
                    </PlayBox>
                </Card>
            ))}
        </BoardLayout>

        {winMessage && <WinnerDialog open={winnerDialog} handleClose={() => setWinnerDialog(false)} content={winMessage}
                                     handleReload={() => reloadGame()}/>}
        {message && <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={5000}
                              onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {message}
            </Alert>
        </Snackbar>}
    </Fragment>
}

export default BoardGame;