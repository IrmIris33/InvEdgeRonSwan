import React from 'react';
import { Card } from 'react-bootstrap';
import {connect} from 'react-redux';
import "../CSS/Header.css";


function Header(props) {
    const { counter } = props;
    return (
        <div>
            <Card>
                <Card.Header>
                    <h4><strong>Ron Swanson Quote Voter</strong></h4>
                    <i className="subtitle">'Vote for your favorite quote!"</i>
                    <span className="total-votes">Total Votes: {counter}</span>
                </Card.Header> 
            </Card>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        counter: state
    }
}
export default connect(mapStateToProps)(Header);











