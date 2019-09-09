import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Next from "./Next";
import Prev from "./Prev";
import Hamburger from "./Hamburger";

export class Content extends Component {
  state = {
    sportCars: [],
    model: "",
    year: "",
    type: "",
    img: "",
    id: "",
    filteredCar: [],
    filteredId: 0,
    userInput: "", //search
    index: 0,
    editing: false
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get(`/api/cars`)
      .then(res => {
        // console.log(res.data);
        this.setState({
          sportCars: res.data,
          img: res.data[res.data.length - 1].img
        });
      })
      .catch(error => {
        alert(error);
        //user method
      });
  };
  //This fn toggles the keys in my object to allow me to edit the data on said keys
  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };
  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.sportCars.length &&
  //     prevState.sportCars.length !== this.state.sportCars.length
  //   ) {
  //     this.getData();
  //   }
  // }
  getCar = () => {
    let filteredCar = this.state.sportCars.filter(ele => {
      //This filters through your data and provides you the one your
      return ele.model
        .toLowerCase()
        .includes(this.state.userInput.toLowerCase());
    });
    // let searchCar = this.state.filteredCar.push(filteredCar);
    // console.log(this.state.filteredCar)
    if (filteredCar[0]) {
      // console.log(searchCar)
      this.setState({
        sportCars: filteredCar
      });
    } else {
      alert("Does Not Exist");
    }
    console.log(this.state);
  };

  // getOne = id => {
  //   axios.get(`/api/car/${id}`).then(res => {
  //     // console.log([res.data]);
  //     this.setState({
  //       sportCars: [res.data]
  //     });
  //   });
  // };
  //This allows me to edit my entire object
  putData = id => {
    const { model, year, type, img } = this.state;
    axios
      .put(`/api/car/${id}`, { model: model, year: year, type: type, img: img })
      .then(res => {
        // console.log(res.data);
        this.setState({
          sportCars: res.data
        });
      });
    this.toggleEdit();
  };

  removeData = id => {
    axios.delete(`/api/car/${id}`).then(res => {
      // console.log(res.data);
      this.setState({ sportCars: res.data });
    });
  };

  // postData = () => {
  //   const { model, year, type, img } = this.state;
  //   axios.post(`/api/cars`, { model, year, type, img }).then(res => {
  //     this.setState({
  //       sportCars: res.data
  //     });
  //   });
  // };

  prev = () => {
    if (this.state.index === 0) {
      this.setState({
        index: 11
      });
      console.log(this.state.index);
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  };

  next = () => {
    //by setting the this.state.index to greater than 11 you don't have to delete
    if (this.state.index > 11) {
      this.setState({
        index: 0
      });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
    // console.log(this.state);
  };

  handleChange(e, key) {
    this.setState({
      [key]: e.target.value
    });
  }
  //The container holds the actual toggle and allows me to see my data for each obj and then manipulate it with an image as well
  render() {
    let { sportCars } = this.state;
    console.log(this.state.img);
    let mapped = sportCars.map(car => {
      return (
        <h2 className="body" key={car.id} data={car}>
          {!this.state.editing ? (
            <section>
              <h1 onClick={this.toggleEdit}>Model: {car.model}</h1>
              <h2>Year: {car.year}</h2>
              <h2>Type: {car.type}</h2>
            </section>
          ) : (
            <section>
              <input
                onChange={e => this.handleChange(e, "model")}
                name="model"
                type="text"
                defaultValue={car.model}
              />
              <input
                onChange={e => this.handleChange(e, "year")}
                name="type"
                type="text"
                defaultValue={car.year}
              />
              <input
                onChange={e => this.handleChange(e, "type")}
                name="year"
                type="text"
                defaultValue={car.type}
              />
              <input
                onChange={e => this.handleChange(e, "img")}
                name="img"
                type="text"
                defaultValue={car.img}
              />
            </section>
          )}

          <Container>
            <Image src={car.img} alt="cars" />
            <div>
              <Button onClick={() => this.putData(car.id)}>Edit</Button>
              <Button onClick={() => this.removeData(car.id)}>Delete</Button>

              <Input
                onChange={e => this.handleChange(e, "userInput")}
                type="text"
                placeholder="search bar"
              />
              <Button onClick={this.getCar} onDoubleClick={this.getData}>
                Enter
              </Button>
            </div>
          </Container>
          <div className="button">
            <Next className="next" next={this.next} />
            <Prev className="prev" prev={this.prev} />
          </div>
        </h2>
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
  outline-width: 0;
`;

export default Content;
