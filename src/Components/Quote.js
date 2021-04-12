import React, { useContext, useState } from 'react';
import VoteContext from "./VoteContext";
import "./Quote.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import UpVote from "./Images/UpVote.png";
import DownVote from "./Images/DownVote.png";


//Create a class component to create state to store the data
function Quote() {
    const [state, setData] = useState({
            count: 0,
            total: 0,
    });
    const {voteData} = useContext(VoteContext);
    const {setVoteData} = useContext(VoteContext)

//Use the increment function to set state
    const increment = () => {
        setData({
            count: state.count + 1
        });
    }
    const decrement = () => {
        setData({
            count: state.count - 1
        })
    }
        return (
            <div className="container">
                <div className="row">
                        <button onClick={increment}>
                        <img className="UpVote" src={UpVote} alt="Thumbs up"/></button>&nbsp;

                        <span>{state.count}</span>&nbsp;

                        <button onClick={decrement}><img className="DownVote" src={DownVote} alt="Thumbs down"/> </button>
                </div>
           </div>
        )
}
export default Quote;