import React, {Component} from 'react';

class ResultComponent extends Component {
//Displays the result that it passed from the parent 'App' component
    render() {
        let {result} = this.props;
        return ( <div className="result">
                 <p>{result}</p>
                 </div>);
    }
}

export default ResultComponent;