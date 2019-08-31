import React, { Component } from "react";
import axios from "axios";
import OneCar from './OneCar'
export class Content extends Component {
  state = {
    sportCars: [],
    model: "",
    year: "",
    type: "",
    img: "",
    id: "",
    specificCar:[]
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
      console.log(res.data);
      this.setState({
          specificCar:res
      })
    });
  };

  render() {
    const { sportCars } = this.state;
    console.log(this.state.sportCars);
    let mapped = sportCars.map(car => {
      return (
        <div key={car.id}>
            <button onClick={() => this.getOne(car.id)}>Pick Car </button>
          <h1>{car.model}</h1>
          <h2>{car.year}</h2>
          <h1>{car.type}</h1>
          <img src={car.img} alt="cars" />
          <span>Model</span>
          <input type="text" name="model" />
          <span>Year</span>
          <input type="text" name="year" />
          <span>Type</span>
          <input type="text" name="type" />
          <span>Img</span>
          <input type="text" name="img" />
          <OneCar id={car.id} specificCar={this.state.specificCar} getOne={this.getOne} />
        </div>
      );
    });
    return <div>{mapped}</div>;
  }
}

export default Content;
