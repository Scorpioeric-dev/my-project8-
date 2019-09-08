import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";


export default class Create extends Component {
  state = {
    sportsCars: [],
    model: "",
    year: "",
    type: "",
    img: "",
    id: "",
    specificCar: []
  };

  // putData = id => {
  //   const { model, year, type, img } = this.state;
  //   axios.put(`/api/car/${id}`, { model, year, type, img }).then(res => {
  //     console.log(res.data);
  //     this.setState({
  //       sportCars: res.data
  //     });
  //   });
  // };

  postData = () => {
    //this is the body I'm sending back to endpoints
    const { model, year, type, img } = this.state;
    axios.post(`/api/cars`, { model, year, type, img }).then(res => {

      this.setState({ sportCars: res.data });
      console.log(res.data)
    });
    //reload page as soon as post is ran
    window.location.reload()
  };

//the target name is defined within the user input div in render
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <InputContainer>
          <span>Model:</span>
          <input onChange={this.handleChange} type="text" name="model" />
          <span>Year:</span>
          <input onChange={this.handleChange} type="text" name="year" />
          <span>Type:</span>
          <input onChange={this.handleChange} type="text" name="type" />
          <span>Img:</span>
          <input onChange={this.handleChange} type="text" name="img" />
        </InputContainer>
        <InputContainer>
          <Button onClick={this.postData}> Create Car</Button>
        </InputContainer>
      </div>
    );
  }
}
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  padding: 40px;
  height: 20vh;
  width: 17vw;
  margin: 20px;
`;
const Button = styled.button`
  background-color: blue;
  border: solid-black 2px;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  border-radius: 6px;
  box-shadow: 4px 4px grey;
  justify-content: space-between;
  margin: 15px;
  width: 10vw;
`;
