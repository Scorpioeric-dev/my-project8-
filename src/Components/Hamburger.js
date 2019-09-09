import React, { Component } from "react";
import Create from "./Create";
import About from "./About";
import HamburgerMenu from "react-hamburger-menu";
import styled from 'styled-components'


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
          <div className='hamburger'>
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              width={0}
              height={0}
              strokeWidth={1}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
        ) : (
          <div className='hamburger'>
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              toggle={this.props.toggleEdit}
              width={0}
              height={0}
              strokeWidth={1}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
              margin={100}
            />
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <Create />
          </div>
        )}
      </div>
    );
  }
}
// const StyledHamburgerMenu = styled.div`
// margin:50px;
// padding: 3.5rem 1.5em 0;
// postion:fixed;
// `
