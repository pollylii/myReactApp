import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import ComingSoon from './films/ComingSoon'
import NowPlaying from './films/NowPlaying'

export default function Films() {
  return (
    <div>
      <div>轮播</div>
      <div>导航栏</div>

      {/* 路由配置，嵌套路由 */}
      <Switch>
        <Route path="/films/nowPlaying" component={NowPlaying}></Route>
        <Route path="/films/comingSoon" component={ComingSoon}></Route>

        <Redirect from='/films' to="/films/nowPlaying"></Redirect>
      </Switch>
    </div>
  )
}
