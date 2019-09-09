import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Hamburger from "./Components/Hamburger";
import Zoom from "react-reveal/Zoom";

import styled from "styled-components";


class App extends Component {
  constructor() {
    super();
    this.state = {
      sportCars: [],
      userInput: "",
      index: 0,
      id: 0,
      toggle: true
    };
  }
  //Toggle function used in conditional rendering
  toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  //This renders my assigned dashboard or homepage//maps over my data array
  render() {
    const { sportCars } = this.state;
    console.log(this.state.index);
    let mapped = sportCars.map(car => {
      return (
        <Container key={car.id}>
          <div>
            <h1>{car.model}</h1>
            <h2>{car.year}</h2>
            <h2>{car.type}</h2>
          </div>

          <Image src={car.img} alt="cars" />
        </Container>
      );
    });
    return (
      <div className="App">
        <Zoom left-cascade>
          {!this.state.toggle ? (
            <div>
              <Header />
            </div>
          ) : (
            <div>
              <Header />
              <Content />
            </div>
          )}
        </Zoom>
      </div>
    );
  }
}
//These styled components are defining how my container is displayed
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  postion: relative;
  top: 20vh;
  bottom: 20vh;
  flex-wrap: wrap;
`;
//This defines the size of my image
const Image = styled.img`
  height: 20vh;
  width: 20vw;
`;
export default App;
