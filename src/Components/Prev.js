import React,{Component} from "react";

export default class Prev extends Component{

  handleChange = value => {
    this.setState({ input: value });
  };
  render(){

    return <button onClick={this.props.prev}>Prev</button>;
  }
}