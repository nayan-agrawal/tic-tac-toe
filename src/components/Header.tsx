import React from "react";
import styled from "@emotion/styled";

const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header(): JSX.Element {
    return <HeaderBox>
        <img src={"/assets/img/logo.png"} width="20%"/>
    </HeaderBox>
}

export default Header;