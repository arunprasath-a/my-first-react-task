import React from 'react';
import {Navbar,NavbarBrand,Nav,NavItem} from 'reactstrap';
import { NavLink } from "react-router-dom";

export default class NavigationBar extends React.Component{

    render(){
        return (

            <React.Fragment>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="#">HCL HomePage</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                       <NavItem>
                            <NavLink to="/LogIn/">Log In</NavLink>
                        </NavItem>
                        
                    </Nav>
               </Navbar>
            </React.Fragment>
    
        )
    }
}



// export default  () => {
//     return (

//         <React.Fragment>
//             <Navbar color="light" light expand="md">
//                 <NavbarBrand href="#">HCL HomePage</NavbarBrand>
//                 <Nav className="ml-auto" navbar>
//                     <NavItem>
//                         <NavLink href="#">Log In</NavLink>
//                     </NavItem>
//                 </Nav>
//            </Navbar>
//         </React.Fragment>

//     )
// }


