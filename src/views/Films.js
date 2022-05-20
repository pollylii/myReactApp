import React from 'react'
import { Route, Redirect, Switch, NavLink } from 'react-router-dom'
import ComingSoon from './films/ComingSoon'
import NowPlaying from './films/NowPlaying'
import { Carousel } from 'antd';


function onChange(a, b, c) {
  // console.log(a, b, c);
}

const contentStyle = {
  height: '200px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export default function Films() {
  return (
    <div>
      {/* 轮播 */}
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
      </Carousel>

      {/* 上映 */}
      <ul style={{display:'flex',textAlign:'center',height: '49px',lineHeight:'49px'}}>
        <li style={{flex: '1'}}>
          <NavLink to='/films/nowPlaying'>正在热映</NavLink>
        </li>
        <li style={{flex: '1'}}>
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
