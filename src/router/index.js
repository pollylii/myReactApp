import React, { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'
import City from '../views/City'
import Search from '../views/Search'


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
                    <Route path="/cinemas" component={Cinemas} exact></Route>
                    <Route path="/cinemas/search" component={Search} ></Route>
                    
                    <Route path="/center" render={(props) => {
                        return isAuth() ? <Center {...props} /> : <Redirect to='/login'/>
                    }} />
                    <Route path="/login" component={Login} ></Route>
                    <Route path="/city" component={City} ></Route>

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
