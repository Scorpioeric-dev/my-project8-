import React, { Component } from "react";
import axios from "axios";
export class Content extends Component {
  state = {
    sportCars: []
  };

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

  render() {
    const { sportCars } = this.state;
    console.log(this.state.sportCars);
    let mapped = sportCars.map(car => {
      return (
        <div key={car.id}>
          <h1>{car.model}</h1>
          <h2>{car.year}</h2>
          <h1>{car.type}</h1>
          <img src={car.img} alt="cars" />
        </div>
      );
    });
    return <div>{mapped}</div>;
  }
}

export default Content;
