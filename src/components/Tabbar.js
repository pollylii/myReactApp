import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/tabbar.css'


export default function Tabbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/films' activeClassName='tabActive'>电影</NavLink>
        </li>
        <li>
          <NavLink to='/cinemas' activeClassName='tabActive'>影院</NavLink>
        </li>
        <li>
          <NavLink to='/center' activeClassName='tabActive'>我的</NavLink>
        </li>
      </ul>
    </div>
  )
}
