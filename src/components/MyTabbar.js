import React, { useEffect, useState } from 'react'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import style from '../style/tabbar.module.css'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
} from 'antd-mobile-icons'


function MyTabbar(props) {

  const [tabs, setTabs] = useState([])
  useEffect(() => {
    setTabs([
      {
        key: '/films',
        icon: <AppOutline />,
        title: '电影'
      },
      {
        key: '/cinemas',
        icon: <MessageOutline />,
        title: '影院'
      },
      {
        key: '/center',
        icon: <MessageFill />,
        title: '我的'
      },

    ])
  }, [])

  return (
    <div className={style.tabbar}>
      <TabBar activeKey={'/' + props.location.pathname.split('/')[1]}
        onChange={val => props.history.push(val)}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}

export default withRouter(MyTabbar)