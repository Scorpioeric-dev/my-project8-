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
      currentImg:
        "https://cdn.shopify.com/s/files/1/1960/4961/products/ferrari_enzo_red_76868_3840x2400_17774302-7d99-436b-900d-091fd4d7b7bd_530x@2x.jpg?v=1507564469",
      userInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      userInput: e
    });
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
