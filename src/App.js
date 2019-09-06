import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Next from './Components/Next'
import Prev from './Components/Prev'
import Zoom from "react-reveal/Zoom";
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
    return (
      <div className="App">
        <Zoom cascade-left>
          <div>
            <Header />
          </div>
          <Content />
          <div className='button'>
          <Next className="next" next={this.next} />
          <Prev className="prev" previous={this.prev} />
          </div>
        </Zoom>
      </div>
    );
  }
}

export default App;
