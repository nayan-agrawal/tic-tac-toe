import React, {Fragment, useState} from "react";
import {Box, Card, CardContent, Snackbar, Alert as MuiAlert, Typography, Stack} from "@mui/material"
import Icon from "./common/Icon";
import styled from "@emotion/styled";
import {AlertProps} from '@mui/material/Alert';
import {WinnerDialog} from "./common/Dialogs";
import ConfettiExplosion from 'react-confetti-explosion';

const itemArray: any[] = new Array(9).fill("empty");

const OuterBoard = styled(Box)`
  background-color: #fff;
  padding: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const BoardLayout = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
    const [isExploding, setIsExploding] = useState<boolean>(false);

    const borderRightIndexes = [2, 5, 8];
    const borderBottomIndexes = [6, 7, 8];

    const changeItem = (itemNumber: number) => {
        if (!winMessage) {
            if (itemArray[itemNumber] === "empty") {
                itemArray[itemNumber] = isCross ? "cross" : "circle";
                setIsCross(!isCross);
            } else {
                setOpen(true);
                setMessage("Already filled");
                return;
            }
        }

        checkIsWinner();
    };

    const reloadGame = () => {
        setIsCross(false);
        setWinMessage("");
        setWinnerDialog(false);
        itemArray.fill("empty", 0, 9);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleWinner = (message: string) => {
        setWinMessage(message);
        setWinnerDialog(true);
        setIsExploding(true);
    }

    const checkIsWinner = () => {
        //  checking  winner of the game
        if (
            itemArray[0] === itemArray[1] &&
            itemArray[0] === itemArray[2] &&
            itemArray[0] !== "empty"
        ) {
            handleWinner(`${itemArray[0]} won`);
        } else if (
            itemArray[3] !== "empty" &&
            itemArray[3] === itemArray[4] &&
            itemArray[4] === itemArray[5]
        ) {
            handleWinner(`${itemArray[3]} won`);
        } else if (
            itemArray[6] !== "empty" &&
            itemArray[6] === itemArray[7] &&
            itemArray[7] === itemArray[8]
        ) {
            handleWinner(`${itemArray[6]} won`);
        } else if (
            itemArray[0] !== "empty" &&
            itemArray[0] === itemArray[3] &&
            itemArray[3] === itemArray[6]
        ) {
            handleWinner(`${itemArray[0]} won`);
        } else if (
            itemArray[1] !== "empty" &&
            itemArray[1] === itemArray[4] &&
            itemArray[4] === itemArray[7]
        ) {
            handleWinner(`${itemArray[1]} won`);
        } else if (
            itemArray[2] !== "empty" &&
            itemArray[2] === itemArray[5] &&
            itemArray[5] === itemArray[8]
        ) {
            handleWinner(`${itemArray[2]} won`);
        } else if (
            itemArray[0] !== "empty" &&
            itemArray[0] === itemArray[4] &&
            itemArray[4] === itemArray[8]
        ) {
            handleWinner(`${itemArray[0]} won`);
        } else if (
            itemArray[2] !== "empty" &&
            itemArray[2] === itemArray[4] &&
            itemArray[4] === itemArray[6]
        ) {
            handleWinner(`${itemArray[2]} won`);
        }
    };

    return <Fragment>
        <OuterBoard>
            <Typography variant="h6" sx={{textAlign: "center"}} mb={2}>{isCross ? "Cross" : "Circle"} turns</Typography>
            <BoardLayout>
                {itemArray.map((item, index) => (
                    <Card onClick={() => changeItem(index)} key={index} elevation={0}>
                        <PlayBox sx={{
                            borderRight: !borderRightIndexes.includes(index) ? "2px solid #c4c4c4" : "",
                            borderBottom: !borderBottomIndexes.includes(index) ? "2px solid #c4c4c4" : ""
                        }}>
                            <Icon name={item}/>
                        </PlayBox>
                    </Card>
                ))}
            </BoardLayout>
        </OuterBoard>

        {winnerDialog &&
            <WinnerDialog open={winnerDialog} handleClose={() => setWinnerDialog(false)} content={winMessage}
                          handleReload={() => reloadGame()}/>}
        {message && <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={5000}
                              onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {message}
            </Alert>
        </Snackbar>}

        <>{isExploding && <ConfettiExplosion/>}</>
    </Fragment>
}

export default BoardGame;