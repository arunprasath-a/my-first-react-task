import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";


 class AboutUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           
        }

        
    }
 

    render() {
        return (
            <React.Fragment>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="#">About Us</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/">Go Back</NavLink>
                        </NavItem>
                        <NavItem>
                            |
                        </NavItem>
                        <NavItem>
                            <NavLink to="/TestPage/">TestPage</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                {/* <Inp /> */}
                <div>
                    <h1>Welcome {this.props.username}</h1>
                </div>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        username:state.userName,
    }
}



export default connect(mapStateToProps)(AboutUs);