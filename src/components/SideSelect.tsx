import {Box, Stack, Typography} from "@mui/material";
import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import {Settings} from "../Utils/Interfaces";
import {Dispatch, SetStateAction, useEffect} from "react";

const StyledButton = styled(Box)`
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #4b56af;
  
  &:hover {
    cursor: pointer;
  }
`;

const SubTitle = styled(Typography)`
  color: #fff;
  font-weight: bolder;
`;

const CustomCloseIcon = styled(CloseIcon)`
  font-size: 4rem;
  stroke: #6d7f8e;
  stroke-width: 0.3rem;
`;

const CustomPanoramaFishEyeIcon = styled(PanoramaFishEyeIcon)`
  font-size: 4rem;
  stroke: #fca730;
  stroke-width: 0.2rem;
`;

function SideSelect(props: {setShowMenu: Dispatch<SetStateAction<String | null>>}): JSX.Element {

    const handleOnClick = (value: string) => {
        if (!value) return;
        let data: string | null = window.localStorage.getItem("settings");
        if (data) {
            let settings: Settings = JSON.parse(data);
            window.localStorage.setItem("settings", JSON.stringify({type: settings.type, level: settings.level, side: value}));
            props.setShowMenu("side");
        }
    }

    return <Stack flexDirection="row" justifyContent="center">
        <Stack flexDirection="column" alignItems="center" spacing={4} mt={8}>
            <SubTitle variant="h4">Pick Your Side</SubTitle>
            <StyledButton onClick={() => handleOnClick("X")} sx={{backgroundColor: "#c4c4c4"}}>
                <CustomCloseIcon/>
            </StyledButton>
            <StyledButton onClick={() => handleOnClick("O")} sx={{backgroundColor: "#fff"}}>
                <CustomPanoramaFishEyeIcon/>
            </StyledButton>
        </Stack>
    </Stack>
}

export default SideSelect;