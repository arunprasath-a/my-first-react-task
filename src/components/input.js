import React from "react";
import axios from "axios";

export default class Inp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
        }
    }

 handleSubmit = event =>{
     event.preventDefault();

     const user={
         name:this.state.name
     }
     axios.post("ttps://jsonplaceholder.typicode.com/users",{user})
     .then(response =>{
         console.log(response);
         console.log(response.data);
     })
 }
 
 handleChange = event => {
     this.setState({
         name:event.target.value,
     })
 }

    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>UserName
                        <input type="text" name="name" onChange={this.handleChange}></input>
                    </label>
                    <button type="submit">ADD</button>
                </form>
            </React.Fragment>
        )
    }
}