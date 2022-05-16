import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
// import { NavLink } from 'react-router-dom'



export default function NowPlaying(props) {
  console.log('props', props);
  const [list, setlist] = useState([])
  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1834624',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651907533991630639235073"}',
        'X-Host': 'mall.film-ticket.film.list',
      }
    }).then(res => {
      setlist(res.data.data.films)
    })
  }, [])

  const history = useHistory()

  // 编程式导航
  const handleChangePage = (filmId) => {

    // window.location.href = "#/detail/" + filmId  // js原生

    // props.history.push(`/detail/${filmId}`) // 

    history.push(`/detail/${filmId}`) //
  }

  return (
    <div>
      <ul>
        {
          list.map(item =>
            <li key={item.filmId} onClick={()=>handleChangePage(item.filmId)}>
              {item.name}
              {/* 声明式导航 */}
              {/* <NavLink to={'/detail' + item.filmId}>{item.name}</NavLink> */}
            </li>
          )
        }
      </ul>
    </div>
  )
}
