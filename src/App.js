import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Hamburger from "./Components/Hamburger";
import Zoom from "react-reveal/Zoom";

import styled from "styled-components";

import { linkSync } from "fs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sportCars: [],
      userInput: "",
      index: 0,
      id: 0
    };
  }

  // hamburger.addEventListener('click', () => {
  //   navLinks.classList.toggle('open')
  //   linkSync.forEach(link => {
  //     link.classList.toggle('fade')
  //   })
  // })
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
        <Zoom cascade-left>
          <div>
            <Header />
          </div>
          <Content />
          <div>{mapped[this.state.id]}</div>

          <Hamburger />
        </Zoom>
      </div>
    );
  }
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  postion: relative;
  top: 20vh;
  bottom: 20vh;
  flex-wrap: wrap;
`;
const Image = styled.img`
  height: 20vh;
  width: 20vw;
`;
export default App;
