import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

import Demo from "./Demo"

class App extends Component {
  render() {
    return (
      
       <Switch>
     
          <Route exact path="/app" component={Demo} />
          <Route exact path="/" component={Home} />
          </Switch>
      
    );
  }
}

export default App;
