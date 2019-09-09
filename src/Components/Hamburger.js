import React, { Component } from "react";
import Create from "./Create";

import HamburgerMenu from "react-hamburger-menu";
import styled from "styled-components";

export default class Hamburger extends Component {
  state = {
    classes: "",
    open: false
  };
  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        {!this.state.open ? (
          <div className="hamburger">
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              width={0}
              height={0}
              strokeWidth={2}
              rotate={0}
              color="blue"
              borderRadius={0}
              animationDuration={0.9}
            />
          </div>
        ) : (
          <div className="hamburger">
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              toggle={this.props.toggleEdit}
              width={0}
              height={0}
              strokeWidth={3}
              rotate={0}
              color="blue"
              borderRadius={0}
              animationDuration={0.5}
              margin={100}
            />
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <Create />
          </div>
        )}
      </div>
    );
  }
}
