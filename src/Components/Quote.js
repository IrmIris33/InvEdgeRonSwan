import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Quote.css";
import UpVote from "./Images/UpVote.png";
import DownVote from "./Images/DownVote.png";

//Create a class component to create state to store the data
class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            total: 0
        }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    }

//Use the increment function to set state
    increment = () => {
        this.setState({
            count: this.state.count + 1 
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    total = () => {
        return this.increment + this.decrement
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <button onClick={this.increment}> 
                    <img className="UpVote" src={UpVote} alt="Thumbs up"/></button>

                    <span>{this.state.count}</span>
            
                    <button onClick={this.decrement}><img className="DownVote" src={DownVote} alt="Thumbs down"/> </button>

                </div>    
           </div>
        )
    }
}

export default Counter;