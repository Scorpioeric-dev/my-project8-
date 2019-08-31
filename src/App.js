import React, { Component } from "react";
import "./App.css";
import Header from "./Main/Header";
import Nav from "./Main/Nav";
import Content from "./Main/Content";

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
