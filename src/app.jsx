import React from 'react'
import './app.css'
import { AccountsContainer } from './pages/home/AccountsContainer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { CreateAccountContainer } from './pages/create/CreateAccountContainer';
import { EditAccountContainer } from './pages/edit/EditAccountContainer';




function App() {

    return (
        <Router>
            <Switch>
                <Route path="/create" component={CreateAccountContainer}></Route>
                <Route path="/edit/:id" component={EditAccountContainer}></Route>
                <Route path="/" component={AccountsContainer}></Route>
            </Switch>

        </Router>
    )
    
}

export { App }