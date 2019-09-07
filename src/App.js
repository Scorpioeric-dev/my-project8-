import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Next from "./Components/Next";
import Prev from "./Components/Prev";
import Zoom from "react-reveal/Zoom";
import About from "./Components/About";
import styled from "styled-components";
import Create from "./Components/Create";
import { linkSync } from "fs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sportCars: [],
      userInput: "",
      index: 0,
      id:0
    };
  }

  prev = () => {
    if (this.state.index === 0) {
      this.setState({
        index: 12
      });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  };
  next = () => {
    if(this.state.index === 11){
      this.setState({
        index:0
      });

    } else {
      this.setState({index: this.state.index + 1})
    }
  console.log(this.state);
  };

  // hamburger.addEventListener('click', () => {
  //   navLinks.classList.toggle('open')
  //   linkSync.forEach(link => {
  //     link.classList.toggle('fade')
  //   })
  // })
  render() {
    const { sportCars } = this.state;
    console.log(this.state.sportCars);
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
          <div className="button">
            <Next className="next" next={this.next} />
            <Prev className="prev" prev={this.prev} />
          </div>
          <Create />
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
