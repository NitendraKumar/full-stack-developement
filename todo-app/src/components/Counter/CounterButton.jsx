import React, { Component } from "react";
import PropTypes from 'prop-types';
import './counter.css';


class CounterButton extends Component {

    constructor(){
        super();

     
        //this.increment = this.increment.bind(this);

    }

    render() {
        return (
            <div className="counter">
                <button onClick={()=> {this.props.incrementMethod(this.props.by)}}> + {this.props.by}</button>
                <span className="counterSpan">
                <button onClick={()=> {this.props.decrementMethod(this.props.by)}}> - {this.props.by}</button>
                
                </span>
            </div>
        );
    }

    
}   

CounterButton.defaultProps ={
    by:1,
}

CounterButton.propTypes = {
    by : PropTypes.number,
}

export default CounterButton;