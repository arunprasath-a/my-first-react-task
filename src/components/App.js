import React from 'react';
import NavigationBar from "./navigationbar";
import { BrowserRouter as Router ,Route} from "react-router-dom";
import AboutUs from "./aboutus";
import LogIn from "./login";
import TestPage from "./testpage";

class App extends React.Component {



  render() {
    return (
      <Router>

        <div className="container">
        <Route path="/" exact strict component={NavigationBar} />
        <Route path="/LogIn/" exact strict component={LogIn} />
        <Route path="/About/" exact strict component={AboutUs} />
        <Route path="/TestPage/" exact strict component={TestPage} />
        </div>


      </Router>
    );
  }
}

export default App;
