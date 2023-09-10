import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import Header from "./components/Header";
import SideSelect from "./components/SideSelect";
import BoardGame from "./components/BoardGame";
import {Settings} from "./Utils/Interfaces";
import Loader from "./components/common/Loader";
import {Box, Grid} from "@mui/material";
import "./index.css";

const GameLayout = styled(Box)`
  background-image: linear-gradient(to bottom, #6c7cfc, #04ccfc);
  height: 100vh;
  padding: 2rem 0;
  background-size: cover;
`;

const BoardLayout = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
    const [loading, setLoading] = useState<boolean>(true);
    const [showMenu, setShowMenu] = useState<String | null>("");
    const options: string[] = ["X", "O"];

    const getMenuValue = (settings: Settings): string => {
        const {side} = settings;
        if (side && options.includes(side)) {
            return "side";
        }
        return "";
    }

    useEffect(() => {
        let data: string | null = window.localStorage.getItem("settings");
        if (data) {
            let settings: Settings = JSON.parse(data);
            let menuValue: string = getMenuValue(settings);
            setShowMenu(menuValue);
        }
        setLoading(false);
        //eslint-disable-next-line
    }, []);

    return (
        <GameLayout>
            <Header/>
            {loading && <Loader/>}
            {!loading && <Grid container px={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Grid item xs={0} sm={0} md={6} lg={6} xl={6} sx={{ textAlign: "center", display: { xs: "none", md: "block", sm: "block", lg: "block" } }}>
                    <img src="/assets/img/astranouts.png" width={"60%"} alt="astranout" />
                </Grid>
                <Grid item xs={12} md={6} lg={6} xl={6}>
                    <BoardLayout>
                        {!showMenu && <SideSelect setShowMenu={setShowMenu}/>}
                        {showMenu && showMenu === "side" && <BoardGame setShowMenu={setShowMenu}/>}
                    </BoardLayout>
                </Grid>
            </Grid>}
        </GameLayout>
    );
}

export default App;
