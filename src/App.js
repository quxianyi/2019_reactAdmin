import React,{Component}from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Admin from './pages/admin/admin'
import Login from './pages/login/login'
// 应用根组件
export default class App extends Component{
    render(h) {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch> 
            </BrowserRouter>
        )
    }
}