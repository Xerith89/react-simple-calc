import React, { Component } from 'react';
import KeypadComponent from './Components/keypad-component';
import ResultComponent from './Components/result-component';

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      result:""
    }
  }

  reset = () => {
    this.setState({
      result:""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0,-1)
    })
  };

  calculate = () => {
    try {
      this.setState({
         // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e)
    {
      this.setState.result({
        result: "error"
      })
    }
  };

  onClick = button => {

    if (button === "=")
    {
      this.calculate();
    }

    else if (button === "C")
    {
      this.reset();
    }

    else if (button === "CE")
    {
      this.backspace();
    }

    else {
      if (this.state.result.length < 15)
      {      this.setState({
        result: this.state.result + button
      })
    }
  }

  };
  
  render() {
    return (
      <div className="calculator-body">
      <h1>Calculator</h1>
      <ResultComponent result = {this.state.result}/>
      <KeypadComponent onClick = {this.onClick}/>
       
      </div>
    );
  }
}

export default App;
