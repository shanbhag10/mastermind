import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import GamePanel from "./components/game_panel";
import { borderbox } from "./styles";

const header_style = {
  textAlign: "center",
  fontSize: "40px",
  fontFamily: "Monaco",
  paddingTop: "10px"
}

ReactDOM.render(
  <React.StrictMode>
    <div style={borderbox}>
    <h1 style={header_style}>MASTERMIND</h1>
    </div>
    <GamePanel/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
