import React, { useState } from 'react';
import "../CSS/Quote.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {increment, decrement} from "../Redux/Action";
import { connect } from 'react-redux';
import UpVote from "../Images/UpVote.png";
import DownVote from "../Images/DownVote.png";


//Create a class component to create state to store the data
function Quote(props) {

    const { increment, decrement, data } = props;
    const [state, setData] = useState({
            count: 0,
            total: 0,
    });

//Use the increment function to set state
    const countUpVote = (dispatch) => {
        setData({
            count: state.count + 1
        });
        increment();
    }
    const countDownVote = () => {
        setData({
            count: state.count - 1
        })
        decrement();
    }
        return (
            <div>
                <div className="row">
                        <button onClick={countUpVote}>
                        <img className="UpVote" src={UpVote} alt="Thumbs up"/></button>&nbsp;&nbsp;

                        <span>{state.count}</span>&nbsp;&nbsp;

                        <button onClick={countDownVote}><img className="icon" src={DownVote} alt="Thumbs down"/></button>
                </div>
                <span className='quote-text'>{data} </span>
            </div>
        )
}
function mapStateToProps(state) {
    return {
        counter: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quote);

