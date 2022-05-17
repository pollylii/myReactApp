import React, { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'

function isAuth() {
    return localStorage.getItem("token")
}

export default class IndexRouter extends Component {
    render() {
        return (
            <HashRouter>
                {this.props.children}
                <Switch>
                    <Route path="/films" component={Films} ></Route>
                    <Route path="/cinemas" component={Cinemas} ></Route>
                    
                    <Route path="/center" render={() => {
                        return isAuth() ? <Center /> : <Redirect to='/login'/>
                    }} />
                    <Route path="/login" component={Login} ></Route>

                    {/* <Route path="/detail" component={Detail} ></Route> */}
                    <Route path="/detail/:filmId" component={Detail} ></Route>

                    {/* 精确匹配 */}
                    <Redirect from='/' to="/films" exact></Redirect>

                    {/* 模糊匹配 */}
                    {/* <Redirect from='/' to="/films" ></Redirect> */}

                    <Route component={NotFound}></Route>

                </Switch>
            </HashRouter>
        )
    }
}
