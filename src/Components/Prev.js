import React,{Component} from "react";
import styled from 'styled-components'

export default class Prev extends Component{

  handleChange = value => {
    this.setState({ input: value });
  };
  render(){

    return <Button onClick={this.props.prev}>Prev</Button>;
  }
}

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
  box-shadow:5px 4px grey;
  justify-content:space-between;
  margin:5px;
`;