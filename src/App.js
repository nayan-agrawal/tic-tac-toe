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
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  }

  const checkIsWinner = () => {
    // To check for winner
    if (itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty") {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty") {
      setWinMessage(`${itemArray[3]} wins`);
    } else if (itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty") {
      setWinMessage(`${itemArray[6]} wins`);
    } else if (itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty") {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty") {
      setWinMessage(`${itemArray[1]} wins`);
    } else if (itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty") {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty") {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty") {
      setWinMessage(`${itemArray[2]} wins`);
    } 
    if (!itemArray.includes("empty")) {
      setWinMessage("Draw!!");
    }
  }

  const changeItem = (itemNumber) => {
    // Verify if box is filled
    if (winMessage) {
      return toast(winMessage, {
        type: "success"
      })
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already Filled!", {
        type: "error"
      })
    }

    checkIsWinner();
  }

  return (
    <Container className="p-5">
      <h1 className="text-center text-uppercase text-color-white">Tic Tac Toe</h1>
      <ToastContainer position="top-right" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="my-3">
              <h1 className="text-uppercase text-center" style={{ color: "#F15412" }}>{winMessage}</h1>
              <Button color="success" block onClick={reloadGame}>
                Reload Game
              </Button>
            </div>
          ) : (
            <h5 className="text-center text-color-white py-2">
              {isCross ? "Cross" : "Circle"} turns
            </h5>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card onClick={() => changeItem(index)} classNames='card'>
                <CardBody className="box">
                  <Icons name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
