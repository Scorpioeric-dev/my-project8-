import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Next from "./Components/Next";
import Prev from "./Components/Prev";
import Zoom from "react-reveal/Zoom";
import About from "./Components/About";
import styled from 'styled-components'

class App extends Component {
  constructor() {
    super();
    this.state = {
      sportCars: [],
      userInput: ""
    };
  }

  prev = () => {
    if (this.state.index === 0) {
      this.setState({
        index: this.state.index - 10
      });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  };
  next = () => {
    this.setState({
      index: this.state.index + 1
    });
  };
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
          <div>{mapped[this.state.index]}</div>
          <div className="button">
            <Next className="next" next={this.next} />
            <Prev className="prev" previous={this.prev} />
          </div>
          
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
