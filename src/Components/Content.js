import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
export class Content extends Component {
  state = {
    sportCars: [],
    model: "",
    year: "",
    type: "",
    img: "",
    id: "",
    specificCar: []
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get(`/api/cars`)
      .then(res => {
        console.log(res.data);
        this.setState({
          sportCars: res.data
        });
      })
      .catch(error => {
        alert(error);
        //user method
      });
  }

  getOne = id => {
    axios.get(`/api/car/${id}`).then(res => {
      console.log([res.data]);
      this.setState({
        sportCars: [res.data]
      });
    });
  };

  render() {
    const { sportCars } = this.state;
    console.log(this.state.sportCars);
    let mapped = sportCars.map(car => {
      return (
        <Container key={car.id}>
        <Button onClick={() => this.getOne(car.id)}>Pick Car</Button>
          <h1>{car.model}</h1>
          <h2>{car.year}</h2>
          <h2>{car.type}</h2>
          <img src={car.img} alt="cars" />
          <InputContainer>
            <span>Model</span>
            <span>Year</span>
            <span>Type</span>
            <span>Img</span>
          </InputContainer>
          <InputContainer>
            <input type="text" name="model" />
            <input type="text" name="year" />
            <input type="text" name="type" />
            <input type="text" name="img" />
          </InputContainer>
        </Container>
      );
    });
    return <div>{mapped}</div>;
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
 background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`

export default Content;
