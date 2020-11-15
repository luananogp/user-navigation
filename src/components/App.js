import React from 'react' ;
import Maincontainer from '../maincontainer';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import User from './main/user';

function App(){
    return(
        
        <div className='container'>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Maincontainer />
                    </Route>
                    <Route path="/user/:id">
                        <User />
                    </Route>
                </Switch>
            </Router>
           
        </div>

    )
}

export default App
