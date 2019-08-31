import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
  }

  render() {
    return (
      <div style={{border: '1px solid blue'}}>
      <div className="Nav">
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        <button onClick={this.props.handleChange} id="edit">
          EDIT
        </button>
        <button onClick={this.props.handleChange} id="delete">
          DELETE
        </button>
      </div>
      </div>
    );
  }
}

export default Nav;
