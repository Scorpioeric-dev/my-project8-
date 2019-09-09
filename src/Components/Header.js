import React, { Component } from "react";
import HeaderImg from "./HeaderImg";
import Hamburger from './Hamburger'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <div>
      <header className="sportRides">
      <HeaderImg />
      <h1 id="Header" style={{ color: "blue"}}>
      Baller Whips
      </h1>
      <HeaderImg/>
      <Hamburger/>
        </header>
      </div>
    );
  }
}

export default Header;
