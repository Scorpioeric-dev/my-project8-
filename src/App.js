import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Content from "./Components/Content";

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
