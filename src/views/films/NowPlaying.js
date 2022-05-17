import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'



export default function NowPlaying(props) {
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

  return (
    <div>
        {
          list.map(item =>
            
             <WithFilmItem key={item.filmId} {...item} />
          )
        }
    </div>
  )
}

function FilmItem(props) {
  let { name, filmId } = props


  return <li onClick={() => {
        props.history.push(`/detail/${filmId}`)
      }}>
        {name}
        {/* <img src={poster} height='100px' width='100px' alt={name} /> */}
      </li>
}

const WithFilmItem = withRouter(FilmItem)
