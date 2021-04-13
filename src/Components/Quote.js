import React, { useState } from 'react';
import "../CSS/Quote.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {increment, decrement} from "../Redux/Action";
import { connect } from 'react-redux';
import UpVote from "../Images/UpVote.png";
import DownVote from "../Images/DownVote.png";


//Create a class component to create state to store the data
function Quote(props) {

    const { increment, decrement, data, id} = props;
    const [state, setData] = useState({
            count: 0,
            total: 0,
    });

//Use the increment/decrement function to count the votes
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

    //Created buttons with an onClick event to capture the votes when clicked.
    //Integrated the data (quotes) with "data" prop.
        return (
            <div id = {id}>
                <div className="row">
                        <button onClick={countUpVote}>
                        <img className="UpVote" src={UpVote} alt="Thumbs up"/></button>&nbsp;&nbsp;

                        <span>{state.count}</span>&nbsp;&nbsp;

                        <button onClick={countDownVote}><img className="icon" src={DownVote} alt="Thumbs down"/></button>&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <span className="quote-text">{data} </span>         
                </div>
            </div>
        )
}
//Created a new function to map to props in order to capture totals when increment and decrement are clicked. Reviewed tutorial in order to implement (ADD SOURCE HERE)
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

