import React from 'react'
import { Route, Redirect, Switch ,NavLink} from 'react-router-dom'
import ComingSoon from './films/ComingSoon'
import NowPlaying from './films/NowPlaying'

export default function Films() {
  return (
    <div>
      <div>轮播</div>
      
      <ul>
        <li>
          <NavLink to='/films/nowPlaying'>正在热映</NavLink>
        </li>
        <li>
        <NavLink to='/films/comingSoon'>即将上映</NavLink>
        </li>
      </ul>

      {/* 路由配置，嵌套路由 */}
      <Switch>
        <Route path="/films/nowPlaying" component={NowPlaying}></Route>
        <Route path="/films/comingSoon" component={ComingSoon}></Route>

        <Redirect from='/films' to="/films/nowPlaying"></Redirect>
      </Switch>
    </div>
  )
}
