import {Dispatch, SetStateAction, useEffect} from "react";
import {Button, Stack} from "@mui/material";
import styled from "@emotion/styled";
import {Settings} from "../Utils/Interfaces";


const StyledButton = styled(Button)`
  padding: 1rem 8rem;
  border-radius: 2rem;
  background-color: #ffffff;
  color: #4b56af;

  &:hover {
    background-color: #f3f3f3;
  }
`;

function SelectLevel(props: { setShowMenu: Dispatch<SetStateAction<String | null>> }): JSX.Element {
    const handleOnClick = (level: string) => {
        if (!level) return;
        let data: string | null = window.localStorage.getItem("settings");
        if (data) {
            let settings: Settings = JSON.parse(data);
            window.localStorage.setItem("settings", JSON.stringify({type: settings.type, level: level, side: ""}));
            props.setShowMenu("type");
        }
    }

    return <Stack flexDirection="row" justifyContent="center">
        <Stack flexDirection="column" spacing={4} mt={8}>
            <StyledButton variant="contained" size="large" onClick={() => handleOnClick("easy")}>Easy</StyledButton>
            <StyledButton variant="contained" size="large" onClick={() => handleOnClick("hard")}>Hard</StyledButton>
        </Stack>
    </Stack>
}

export default SelectLevel;