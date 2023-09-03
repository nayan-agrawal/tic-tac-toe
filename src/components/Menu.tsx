import {Button, Stack} from "@mui/material";
import styled from "@emotion/styled";
import {Dispatch, SetStateAction} from "react";

const StyledButton = styled(Button)`
  padding: 1rem 8rem;
  border-radius: 2rem;
  background-color: #ffffff;
  color: #4b56af;

  &:hover {
    background-color: #f3f3f3;
  }
`;

function Menu(props: { setShowMenu: Dispatch<SetStateAction<String | null>>; }): JSX.Element {
    const handleOnClick = (type: string) => {
        if (!type) return;
        window.localStorage.setItem("settings", JSON.stringify({type: type, level: "", side: ""}));
        if (type === "one_player") {
            props.setShowMenu("level");
        } else {
            props.setShowMenu("type");
        }
    }

    return <Stack flexDirection="row" justifyContent="center">
        <Stack flexDirection="column" spacing={4} mt={8}>
            <StyledButton variant="contained" size="large" onClick={() => handleOnClick("one_player")}>1
                Player</StyledButton>
            <StyledButton variant="contained" size="large" onClick={() => handleOnClick("two_players")}>2
                Players</StyledButton>
        </Stack>
    </Stack>
}

export default Menu;