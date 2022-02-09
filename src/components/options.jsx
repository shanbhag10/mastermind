import React, { Component } from "react";
import { borderbox, center } from "../styles";

const panelbox = {
    ...borderbox,
    height: '90px',
    backgroundColor: 'LightGray',
    border: 'solid',
    maxWidth: '320px',
    ...center
}

const btn_styles = {
    fontSize: "20px",
    padding: '3px 6px',
    margin: '5px',
    borderColor: "white"
};

class Options extends Component {
    render() {
      return (
        <div>
            <div style={panelbox}>
              <button className="btn btn-primary" style={{...btn_styles, backgroundColor:"red"}} onClick={() => this.props.onGuess('A')}>A</button>
              <button className="btn btn-primary" style={{...btn_styles}} onClick={() => this.props.onGuess('B')}>B</button>
              <button className="btn btn-primary" style={{...btn_styles, backgroundColor:"green"}} onClick={() => this.props.onGuess('C')}>C</button>
              <button className="btn btn-primary" style={{...btn_styles, backgroundColor:"violet"}} onClick={() => this.props.onGuess('D')}>D</button>
              <button className="btn btn-primary" style={{...btn_styles, backgroundColor:"orange"}} onClick={() => this.props.onGuess('E')}>E</button>
              <button className="btn btn-primary" style={{...btn_styles, backgroundColor:"black"}} onClick={() => this.props.onGuess('F')}>F</button>
              <button className="btn btn-primary" style={{...btn_styles, backgroundColor:"purple"}} onClick={() => this.props.onGuess('G')}>G</button>
              <button className="btn btn-primary" style={{...btn_styles, backgroundColor:"brown"}} onClick={() => this.props.onGuess('H')}>H</button>
            </div>
        </div>
      );
    }
}

export default Options;
