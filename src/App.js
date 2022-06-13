import Icons from "./Components/Icons";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import {
  Card,
  Col,
  Row,
  Container,
  Button,
  CardBody,
} from "reactstrap";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"

const itemArray = new Array(9).fill("empty");

const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    // Reload Game
  }

  const checkIsWinner = () => {
    // To check for winner
  }

  const changeItem = (itemNumber) => {
    // Verify if box is filled
  }

  return (
    <div className="App">
      <Icons name="cross" />
      <Icons name="circle" />
      <Icons name="" />
    </div>
  );
}

export default App;
