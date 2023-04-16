import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import List from './pages/List';

export default function Routes(){
    return(

        <Router>
            <Switch>
                <Route path="/" exact component={List} />
                <Route path="/search" component={List} />
                <Route path="/list" component={List} />                
            </Switch>
        </Router>

    );

}
