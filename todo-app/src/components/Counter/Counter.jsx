import React,{Component} from "react";
import CounterButton from "./CounterButton";

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counter:0
        } 

    }

    render (){
        return (
            <div> 
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span className="counterSpan">{this.state.counter}</span>
                <div >
                    <button className="reset" onClick={this.reset}>reset</button>
                </div>

            </div>
        );
    }

    increment = (by)=> {
        
        this.setState(
           (prevState)=> {
            return {counter: prevState.counter + by}
        });
    }

    decrement = (by) => {
        this.setState(
        (prevState) => {
            return {counter:prevState.counter - by}
        });
    }

    reset = () => {
        this.setState(
        (prevState) => {
            return {counter:0}
        });
    }
}

export default Counter;