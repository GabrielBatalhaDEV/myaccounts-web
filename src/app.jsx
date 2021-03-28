import React, { useState, useEffect } from 'react'
import './app.css'
import { AccountsContainer } from './pages/home/AccountsContainer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,

} from "react-router-dom";
import { CreateAccountContainer } from './pages/create/CreateAccountContainer';




function App() {

    return (
        <Router>
            <Switch>
                <Route path="/create" component={CreateAccountContainer}></Route>
                <Route path="/" component={AccountsContainer}></Route>
                
            </Switch>

        </Router>
    )
    
}

export { App }