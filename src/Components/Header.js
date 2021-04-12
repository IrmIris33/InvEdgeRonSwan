import React, {useContext} from 'react';
import VoteContext from "./VoteContext";


function Header () {
    const {voteData} = useContext(VoteContext);
    console.log(voteData);
    return (
        <div className="header">
            <p>
                <b className="title">Ron Swanson Quote Voter</b>
                <i className="subtitle">'Vote for your favorite quote!"</i>
                <span className="total-votes">Total Votes: {voteData.total}</span>
            </p>
        </div>
    )
}
export default Header;





