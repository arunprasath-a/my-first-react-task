import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import "./login.css";
import axios from 'axios';
import {connect} from "react-redux";



class LogIn extends React.Component {

    constructor(props) {
        console.log("constructor created");
        super(props);
        this.state = {
            userDetails: "",
            // userName: "",
            // password: "",

        }
        // this.onNameChange = this.onNameChange.bind(this);
        // this.onPassChange = this.onPassChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.userDetailsMap = new Map();


    }

    // onNameChange(event) {
    //     this.setState({
    //         userName: event.target.value
    //     })

    //     console.log(this.state.userName);
    // }

    // onPassChange(event) {
    //     this.setState({
    //         password: event.target.value
    //     })

    // }

    

    onFormSubmit(event) {
        if (this.userDetailsMap.get(this.props.userName) !== undefined) {
            if (this.userDetailsMap.get(this.props.userName) === this.props.password) {
                alert("login successful");
                this.props.history.push(`/About/`);
            } else {
                alert("Invalid credentials");
                event.preventDefault();
            }
        } else {
            alert("User not found");
            event.preventDefault();
        }
    }

    componentWillMount() {
        console.log("component will mount");
        console.log("-------------");
    }

    componentDidMount() {
        console.log("component did mount from login page");
        axios.get("http://my-json-server.typicode.com/arunprasath-a/fakeApiNew3/users")
            .then(response => {
                this.setState({
                    userDetails: response.data,
                })
                console.log(this.state.userDetails);
                this.logUsers();

            })
    }

    logUsers() {
        var val = this.state.userDetails[0];
        console.log(val);
        Object.keys(val).map(element => {
            this.userDetailsMap.set(element, val[element])
            return this.userDetailsMap;
        })
        console.log(this.userDetailsMap);
    };



    render() {
        console.log("rendering started here");
            
        
        return (

            <React.Fragment>
                <Container>

                    <Row>
                        <Col xs="1" ></Col>
                        <Col xs="10" >
                            <Navbar color="light" light expand="md">
                                <NavbarBrand href="#">Log In</NavbarBrand>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink to="/">Go Back</NavLink>
                                    </NavItem>
                                </Nav>
                            </Navbar>

                        </Col>
                        <Col xs="1"></Col>
                    </Row>
                    <Row>
                        <Col xs="3"></Col>
                        <Col xs="6"><div className="loginform">
                            <form onSubmit={this.onFormSubmit}>

                                <br></br>
                                <br></br>
                                <div className="loginElements">
                                    <div>
                                        <h1>Join with us !</h1>
                                    </div>
                                    <br></br>


                                    <div>
                                        <InputGroup>
                                            <Input placeholder="username" required name="username"  value={this.props.userName} onChange={this.props.onNameChange} />
                                            <InputGroupAddon addonType="append">Ur Name Here </InputGroupAddon>
                                        </InputGroup>
                                    </div>
                                    <br></br>
                                    <div>
                                        <InputGroup>
                                            <Input placeholder="Password" type="text"  required value={this.props.password} onChange={this.props.onPassChange} />
                                            <InputGroupAddon addonType="append">Password Here</InputGroupAddon>
                                        </InputGroup>
                                    </div>

                                    <br></br>
                                    <div>
                                        <Button color="primary">Log In</Button>
                                        
                                    </div>
                                    
                                </div>

                            </form>
                        </div>
                        </Col>
                        <Col xs="3"></Col>
                    </Row>

                </Container>

            </React.Fragment>
        )
    }
}


const mapStateToProps =(state) =>{
    return{
        userName:state.userName,
        password:state.password,
        
    }
} 
  
const mapDispatchToProps = (dispatch) =>{
    return{
        onNameChange : (event)=> dispatch({type:"NAME_CHANGE",nameValue: event.target.value}),
        onPassChange : (event)=> dispatch({type:"PASS_CHANGE",passValue: event.target.value})
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(LogIn);
