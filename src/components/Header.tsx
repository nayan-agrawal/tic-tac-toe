import React from "react";
import styled from "@emotion/styled";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header(): JSX.Element {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const isXs = useMediaQuery(theme.breakpoints.up('xs'));

    return <HeaderBox>
        <img src={"/assets/img/logo.png"} width={isSm ? "25%" : isXs ? "60%" : "25%"} alt="tic tac toe logo" />
    </HeaderBox>
}

export default Header;