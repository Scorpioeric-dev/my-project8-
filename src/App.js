import React, { Component } from "react";
import "./App.css";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Content from "./Component/Content";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sportCars: [],
      userInput: ""
    };
  }

  render() {
    return (
      <main className="App">
        <Nav />
        <Header />
        <Content />
      </main>
    );
  }
}

export default App;
