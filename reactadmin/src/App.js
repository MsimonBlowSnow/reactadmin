import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch} from "react-router-dom"
import Login from './pages/login'
import Admin from './pages/admin'
export default class app extends Component {
    render() {
        return (
           <Router>
               <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={Admin}></Route>
               </Switch>
           </Router>
        )
    }
}
