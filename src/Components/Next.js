import React,{Component} from "react";
import styled from 'styled-components'

export default class Next extends Component {
  state = {
    userInput:''
  }
  handleChange = value => {
    this.setState({ input: value });
  };
  render(){

    return <Button onClick={this.props.next}> Next </Button>;
  }
}
const Button = styled.button`
  background-color: blue;
  border: solid-black 4px;
  color: white;
  padding: 8px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  border-radius: 6px;
  box-shadow:4px 4px grey;
  justify-content:space-between;
  margin:5px;
`;