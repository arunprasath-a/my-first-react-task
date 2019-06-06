import React from "react";
import { connect } from "react-redux";


class TestPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <h1>Hii {this.props.username}</h1>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        username:state.userName,
    } 
}

export default connect(mapStateToProps)(TestPage);