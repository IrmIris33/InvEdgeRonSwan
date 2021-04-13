import React from 'react';
import { Navbar } from 'react-bootstrap';
import {connect} from 'react-redux';
import "../CSS/Header.css";


function Header(props) {
    const { counter } = props;
    return (
        <div>
            <Navbar>
                <Navbar.Brand><b className="title">Ron Swanson Quote Voter</b></Navbar.Brand>
                <Navbar.Brand><i className="subtitle">"Vote for your favorite quote!"</i></Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <b className="total-votes">Total Votes: {counter}</b>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
           
           
        </div>
    )
}
function mapStateToProps(state) {
    return {
        counter: state
    }
}
export default connect(mapStateToProps)(Header);











