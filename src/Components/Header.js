import React, {useContext} from 'react';
import VoteContext from "./VoteContext";
import { Card } from "react-bootstrap";


function Header () {
    const {voteData} = useContext(VoteContext);
    console.log(voteData);
    return (
        <div className="header">
            <Card>
                <Card.Header>
                    <b className="title">Ron Swanson Quote Voter</b>
                    <i className="subtitle">'Vote for your favorite quote!"</i>
                    <span className="total-votes">Total Votes: {voteData.total}</span> 
                </Card.Header>  
            </Card>
        </div>
    )
}
export default Header;





