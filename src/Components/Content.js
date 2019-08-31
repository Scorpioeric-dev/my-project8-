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

  putData = id => {
    const { model, year, type, img } = this.state;
    axios.put(`/api/car/${id}`, { model, year, type, img }).then(res => {
      console.log(res.data);
      this.setState({
        sportCars: res.data
      });
    });
  };

  removeData = id => {
    axios.delete(`/api/car/${id}`).then(res => {
      console.log(res.data);
      this.setState({
        sportcars: res.data
      });
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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
          <Button onClick={() => this.removeData(car.id)}>Delete</Button>
          <InputContainer>
            <span>Model</span>
            <span>Year</span>
            <span>Type</span>
            <span>Img</span>
          </InputContainer>
          <InputContainer>
            <input onChange={this.handleChange} type="text" name="model" />
            <input onChange={this.handleChange} type="text" name="year" />
            <input onChange={this.handleChange} type="text" name="type" />
            <input onChange={this.handleChange} type="text" name="img" />
          </InputContainer>

          <Button onClick={() => this.putData(car.id)}>Update Car</Button>
        </Container>
      );
    });
    return (
      <div>
        {mapped} <Button onClick={this.postData}> Create Car</Button>
      </div>
    );
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
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export default Content;
