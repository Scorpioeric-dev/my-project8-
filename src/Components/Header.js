import React, { Component } from "react";
import HeaderImg from "./HeaderImg";
import About from "./About";
import Create from "./Create";

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
        </header>
      </div>
    );
  }
}

export default Header;
