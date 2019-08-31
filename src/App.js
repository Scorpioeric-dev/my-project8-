import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Main/Header";
import Nav from "./Main/nav";

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

  componentDidMount() {
    this.getData();
    console.log(res.data)
  }

  getData() {
    axios
      .get(`/api/cars`)
      .then(res => {
        console.log(res.data);
        this.setState({
          sportCars: res.data,
          currentImg: res.data[res.data.Length - 1].img
        });
      })
      .catch(error => {
        alert(error);
        //user method
      });
  }

  handleChange(e) {
    this.setState({
      userInput: e
    });
  }

  render() {
    let mappedData = this.state.sportCars.map(taco => {
      return (
        <div key={taco.id}>
          <h1>
            {taco.model} {taco.color} {taco.type} {taco.img}
          </h1>
        </div>
      );
    });
    return (
      <main className="App">
        <Nav />
        
        <Header />
        {mappedData}
      </main>
    );
  }
}

export default App;
