import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../style/tabbar.module.css'


export default function Tabbar() {
  return (
    <div className={style.tab + ' aaa'}>
      <ul>
        <li>
          <NavLink to='/films' activeClassName={style.tabActive}>电影</NavLink>
        </li>
        <li>
          <NavLink to='/cinemas' activeClassName={style.tabActive}>影院</NavLink>
        </li>
        <li>
          <NavLink to='/center'activeClassName={style.tabActive}>我的</NavLink>
        </li>
      </ul>
    </div>
  )
}
