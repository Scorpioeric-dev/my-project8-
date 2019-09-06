import React,{Component} from "react";

export default class Next extends Component {
  state = {
    userInput:''
  }
  handleChange = value => {
    this.setState({ input: value });
  };
  render(){

    return <button onClick={this.props.next}> Next </button>;
  }
}