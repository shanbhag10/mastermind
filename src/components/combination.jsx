import React, { Component } from "react";

const comb_panel_styles = {
  paddingTop: "10px",
};

const comb_styles = {
  fontSize: "30px",
  marginLeft: "5px",
  marginRight: "5px",
  marginTop: "20px",
  display: 'inline-block',
  width: '50px',
  paddingLeft: '15px'
};

const btn_styles = {
  fontSize: "20px",
  marginLeft: "15px",
  marginRight: "5px",
  paddingTop : "10px",
  paddingBottom : "10px",
  paddingLeft: '10px',
  paddingRight: '10px',
  backgroundColor : "yellow",
  borderColor: "black",
  border: 'solid black',
  marginTop: '5px',
  color: 'black',
  fontWeight: "bold",
  fontFamily: "Trebuchet MS"
};

const label_styles = {
  marginLeft: "15px",
  marginRight: "5px",
  paddingTop: "15px",
  paddingBottom: "20px",
  paddingLeft: "4px",
  paddingRight: "4px",
  border: 'solid black',
  display: 'none',
  fontSize: "14px",
  backgroundColor : "#212525",
  color: "white",
  fontWeight: "bold",
  fontFamily: "Trebuchet MS"
};

class Guess extends Component {
  state = {};

  get_id = (index) => {
    return this.props.round + '_' + index;
  }

  get_button_id = () => {
    return this.props.round + '_btn';
  }

  get_label_id = () => {
    return this.props.round + '_label';
  }

  render() {
    
    return (
      <div>
          <div style={comb_panel_styles}>
          <input type='text' id={this.get_id(0)} style={comb_styles} name={this.get_id(0)}/>
          <input type='text' id={this.get_id(1)} style={comb_styles} name={this.get_id(1)}/>
          <input type='text' id={this.get_id(2)} style={comb_styles} name={this.get_id(2)}/>
          <input type='text' id={this.get_id(3)} style={comb_styles} name={this.get_id(3)}/>
          <button 
            id = {this.get_button_id()}
            className="btn btn-primary" 
            style={btn_styles}
            onClick={() => this.props.onCheck()}
          >
            TRY
          </button>
          <label 
            id = {this.get_label_id()}
            className="btn btn-primary" 
            style={label_styles}
          >
          </label>
        </div>
      </div>
    );
  }
}

export default Guess;
