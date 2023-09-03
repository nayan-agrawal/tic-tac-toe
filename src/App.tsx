import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SideSelect from "./components/SideSelect";
import SelectLevel from "./components/SelectLevel";
import BoardGame from "./components/BoardGame";
import {Settings} from "./Utils/Interfaces";
import Loader from "./components/common/Loader";
import {Box} from "@mui/material";

const AppLayout = styled.div`
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const GameLayout = styled.div`
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100vh;
  background-image: linear-gradient(to bottom, #6c7cfc, #04ccfc);
`;

const BoardLayout = styled(Box)`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;

function App() {
    const [loading, setLoading] = useState<boolean>(true);
    const [showMenu, setShowMenu] = useState<String | null>("");
    const levels: string[] = ["easy", "hard"];
    const types: string[] = ["one_player", "two_players"];
    const options: string[] = ["X", "O"];

    const getMenuValue = (settings: Settings): string => {
        const {type, level, side} = settings;
        if (types.includes(type) && options.includes(side)) {
            return "side";
        } else if (type === "one_player" && levels.includes(level)) {
            return "type";
        } else if (type === "two_players") {
            return "type";
        } else if (type === "one_player") {
            return "level";
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
    }, []);

    return (
        <AppLayout>
            <GameLayout>
                <Header/>
                {loading && <Loader/>}
                {!loading && <BoardLayout>
                    {!showMenu && <Menu setShowMenu={setShowMenu}/>}
                    {showMenu && showMenu === "level" && <SelectLevel setShowMenu={setShowMenu}/>}
                    {showMenu && showMenu === "type" && <SideSelect setShowMenu={setShowMenu}/>}
                    {showMenu && showMenu === "side" && <BoardGame/>}
                </BoardLayout>}
            </GameLayout>
        </AppLayout>
    );
}

export default App;
