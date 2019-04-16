import React, {Component} from 'react';
import "./result-component.css";

class ResultComponent extends Component {
//Displays the result that it passed from the parent 'App' component
    render() {
        let {result} = this.props;
        if (result === '')
        {
            result = 0;
        }
        return ( <div className="result">
                 <p>{result}</p>
                 </div>);
    }
}

export default ResultComponent;