import React, {Component} from 'react';
import './keypad-component.css';

class KeypadComponent extends Component {

    //Create buttons for the calculator - On click we pass the button's name upwards as a prop
    render() {

        return (
            <div className="button-field">
            <button class="button" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
            <button class="button" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
            <button class="button" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
            <button class="button" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
            <div/>
            <button class="button" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
            <button class="button" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
            <button class="button" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
            <button class="button" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
            <div/>
            <button class="button" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
            <button class="button" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
            <button class="button" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
            <button class="button" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
            <div/>
            <button class="button" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
            <button class="button" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
            <button class="button" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
            <button class="button" name="*" onClick={e => this.props.onClick(e.target.name)}>*</button>
            <div/>
            <button class="button" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
            <button class="button" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
            <button class="button" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
            <button class="button" name="/" onClick={e => this.props.onClick(e.target.name)}>/</button>
            
            </div>);
    }

}

export default KeypadComponent;