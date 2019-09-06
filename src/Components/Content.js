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
    specificCar: [],
    index:0
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
      // console.log(res.data);
      this.setState({
        sportCars: res.data
      });
    });
  };
  //work on the delete function
  removeData = id => {
    axios.delete(`/api/car/${id}`).then(res => {
      // console.log(res.data);
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
        <div className="body">
          <Container key={car.id}>
            <div>
              <h1>{`Model: ${car.model}`}</h1>
              <h2>{`Year: ${car.year}`}</h2>
              <h2>{`Type: ${car.type}`}</h2>
            </div>

            <Image src={car.img} alt="cars" />
            <div>
              <Button onClick={() => this.getOne(car.id)}>Pick Car</Button>
              <Button onClick={() => this.putData(car.id)}>Update Car</Button>
              <Button onClick={() => this.removeData(car.id)}>Delete</Button>
            </div>
          </Container>
        </div>
      );
    });
    return <div>{mapped}</div>;
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
  box-shadow:4px 4px grey;
  justify-content:space-between;
  margin:5px;
`;
const Image = styled.img`
background:black;
  height: 44vh;
  width: 40vw;
  border:light grey;
  border-radius:8px;
  align-items:center;
  margin:80px;
  padding:30px;
  box-shadow: 10px 8px grey;

  
  
`;

export default Content;
