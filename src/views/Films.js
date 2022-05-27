import React, { useState, useEffect } from 'react'
import { Route, Redirect, Switch, NavLink } from 'react-router-dom'
import { Swiper, Tabs } from 'antd-mobile'
import ComingSoon from './films/ComingSoon'
import NowPlaying from './films/NowPlaying'
import { Image } from 'antd-mobile'
import img1 from '../images/fimls/哆啦A梦.jpg'
import img2 from '../images/fimls/橘生淮南.jpg'
import img3 from '../images/fimls/我要我们在一起.jpg'

export default function Films(props) {
  const [imgs, setImgs] = useState([])
  useEffect(() => {
    setImgs([
      {
        key: 1,
        img: img1
      },
      {
        key: 2,
        img: img2
      },
      {
        key: 3,
        img: img3
      }
    ])
  }, [])
  return (
    <div>
      {/* 轮播 */}
      <Swiper autoplay={true} loop={true} style={{ height: '160px' }}>
        {
          imgs.map((item) =>
            <Swiper.Item key={item.key}>
              <Image src={ item.img } alt={item.img} style={{ height:'100%',width:'100%'}} fit='cover'/>
            </Swiper.Item>
          )
        }
      </Swiper>

      {/* 上映 */}
      <div style={{ position: 'sticky', top: 0, background: 'white' }}>
        <Tabs activeKey={props.location.pathname}
          onChange={val => { props.history.push(val) }}>
          <Tabs.Tab title='正在热映' key='/films/nowPlaying' />
          <Tabs.Tab title='即将上映' key='/films/comingSoon' />
        </Tabs>
      </div>


      {/* 路由配置，嵌套路由 */}
      <Switch>
        <Route path="/films/nowPlaying" component={NowPlaying}></Route>
        <Route path="/films/comingSoon" component={ComingSoon}></Route>

        <Redirect from='/films' to="/films/nowPlaying"></Redirect>
      </Switch>
    </div>
  )
}
