import React, { Component } from "react";
import HeaderImg from "./HeaderImg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{border:'1px solid black'}}>
        <header className="sportRides">
          <HeaderImg />
          <h1 id="Header" style={{ color: "red" }}>
            Collectibles
          </h1>
          <HeaderImg />
        </header>
      </div>
    
      
    
    );
  }
}

export default Header;
