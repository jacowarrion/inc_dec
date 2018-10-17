import React from 'react';
import './App.css';
import but from "./piumeno.png";

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentNumber: 0,
      img:{
        "backgroundImage" : "url("+but+")",
      }
    }
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
  }
  add(){
    this.setState({
      currentNumber: (this.state.currentNumber + 1)
    })
  }
  sub(){
    this.setState({
      currentNumber: (this.state.currentNumber - 1)
    })
  }

  render() {
    return (
      <div className="App">
      <div id="meno"style={this.state.img} onClick={this.add}> </div>
      <div id="count">{this.state.currentNumber}</div>
      <div id="piu" style={this.state.img} onClick={this.sub}> </div>
      </div>
    );
  }
}
