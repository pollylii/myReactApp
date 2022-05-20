import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import style from '../../style/filmI.module.css'
import { Button } from 'antd'



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
    <ul className={style.filmsList}>
      {
        list.map(item =>

          <WithFilmItem key={item.filmId} {...item} />
        )
      }
    </ul>
  )
}

function FilmItem(props) {
  console.log('FilmItem', props)
  let { filmId,poster, name,item, grade, actors, nation, runtime } = props


  return <li onClick={() => {
    props.history.push(`/detail/${filmId}`)
  }} className={style.filmItem}>
    <div className={style.filmWrap}>
      {/* img */}
      <div className={style.filmImg} >
        <img src={poster} alt={name}></img>
      </div>
      {/* 电影信息 */}
      <div className={style.filmInfo}>
        <div className={style.filmName}>{name}{item.name}</div>
        <div className={style.filmGrade}>观众评分：{grade}</div>
        <div className={style.filmActors+''+style.infoCol}>
          主演：{
            actors.map(actor=>
            <span key={actor.name}>{actor.name}&nbsp;&nbsp;</span>
            )
          }
        </div>
        <div className={style.filmDetail}>{nation}&nbsp;&nbsp;|&nbsp;&nbsp;{runtime}</div>
        
      </div>
      {/* 购买 */}
      <div className={style.filmBuy} style={{float: 'right',}}>
          <Button type="dashed" size='small'>购买</Button>
      </div>
    </div>
    {/* <img src={poster} height='100px' width='100px' alt={name} /> */}
  </li>
}

const WithFilmItem = withRouter(FilmItem)
