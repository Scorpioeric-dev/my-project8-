import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Next from "./Next";
import Prev from "./Prev";

export class Content extends Component {
  state = {
    sportCars: [],
    model: "",
    year: "",
    type: "",
    currentImg: "",
    id: "",
    filteredCar: [],
    filteredId: 0,
    userInput: "",
    index: 0
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get(`/api/cars`)
      .then(res => {
        // console.log(res.data);
        this.setState({
          sportCars: res.data,
          currentImg: res.data[res.data.length - 1].img
        });
      })
      .catch(error => {
        alert(error);
        //user method
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sportCars.length &&
      prevState.sportCars.length !== this.state.sportCars.length
    ) {
      this.getData();
    }
  }
  getCar = userInput => {
    let filteredCar = this.state.sportCars.filter(ele => {
      // console.log(ele.model);
      return ele.model.toLowerCase().includes(userInput.toLowerCase());
    });
    if (filteredCar[0]) {
      this.setState({
        currentImg: filteredCar[0].img,
        model: filteredCar[0].model,
        year: filteredCar[0].year,
        type: filteredCar[0].type
      });
    } else {
      alert("Does Not Exist");
    }
  };

  getOne = id => {
    axios.get(`/api/car/${id}`).then(res => {
      // console.log([res.data]);
      this.setState({
        sportCars: [res.data]
      });
    });
  };
  //work on the put function is not working on front end or backend
  putData = (id, body) => {
    // const { model, year, type, img } = this.state;
    axios.put(`/api/car/${id}`, body).then(res => {
      // console.log(res.data);
      this.setState({
        sportCars: res.data
      });
    });
  };

  removeData = id => {
    axios.delete(`/api/car/${id}`).then(res => {
      // console.log(res.data);
      this.setState({ sportCars: res.data });
    });
  };

  postData = () => {
    const { model, year, type, img } = this.state;
    axios.post(`/api/cars`, { model, year, type, img }).then(res => {
      this.setState({
        sportcars: res.data
      });
    });
  };

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
    if (this.state.index === 11) {
      this.setState({
        index: 0
      });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
    // console.log(this.state);
  };

  handleChange = e => {
    this.setState({
      userInput: e
    });
  };

  render() {
    let { sportCars } = this.state;
    console.log(this.state);
    let mapped = sportCars.map(car => {
      return (
        <div className="body" key={car.id} data={car}>
          <Container>
            <div>
              <h1>Model: {car.model}</h1>
              <h2>Year: {car.year}</h2>
              <h2>Type: {car.type}</h2>
            </div>
            <Image src={car.img} alt="cars" />
            <div>
              <Button onClick={() => this.putData(car.id)}>Edit</Button>
              <Button onClick={() => this.removeData(car.id)}>Delete</Button>

              <Input
                onChange={e => this.handleChange(e.target.value)}
                type="text"
                placeholder="search bar"
              />
              <Button onClick={() => this.getCar(this.state.userInput)}>
                Enter
              </Button>
            </div>
          </Container>
          <div className="button">
          <Next className="next" next={this.next} />
          <Prev className="prev" prev={this.prev} />
          </div>
        </div>
      );
    });
    return <div>{mapped[this.state.index]}</div>;
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
  padding: 0.2rem;
`;

const Button = styled.button`
  background-color: blue;
  border: solid-black 2px;
  color: white;
  padding: 10px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  border-radius: 6px;
  box-shadow: 4px 4px grey;
  justify-content: space-between;
  margin: 20px;
`;
const Image = styled.img`
  background: black;
  height: 44vh;
  width: 40vw;
  border: light grey;
  border-radius: 8px;
  align-items: center;
  margin: 80px;
  padding: 30px;
  box-shadow: 10px 8px grey;
`;
const Input = styled.input`
  border-radius: 10px;
  box-shadow: 5px 8px grey;
  justify-content: space-between;
  margin: 20px;
  height: 3.5vh;
`;

export default Content;
