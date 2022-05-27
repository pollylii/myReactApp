import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Image, List } from 'antd-mobile'
// import style from '../../style/filmI.module.css'



export default function NowPlaying(props) {
  const [filmList, setFilmList] = useState([])

  // const count = useRef(0)

  // const loadMore = () => {
  //   count.current++
  //   setHasMore(false)
  //   axios({
  //     url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1834624`,
  //     headers: {
  //       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651907533991630639235073"}',
  //       'X-Host': 'mall.film-ticket.film.list',
  //     }
  //   }).then(res => {
  //     setFilmList([...filmList, ...res.data.data.films])
  //     setHasMore(res.data.data.films.length > 0)
  //     console.log('len', res.data.data.films.length);
  //   })
  // }
  useEffect(() => {
    axios({
      url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1834624`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651907533991630639235073"}',
        'X-Host': 'mall.film-ticket.film.list',
      }
    }).then(res => {
      setFilmList(res.data.data.films)
    })
  }, [])

  return (
    <div>
      <List>
        {
          filmList.map(item => (
            <List.Item key={item.filmId}
              prefix={
                <Image src={item.poster} width={80} />
              }
              description={
                <div>
                  <div>
                    <span>{item.name}</span>
                    <span>{item.filmType.name}</span>
                  </div>
                  <div>观众评分：{item.grade}</div>
                  <div>
                    主演：
                    {/* {
                    (item.actors) ?
                      (item.actors).map(actor => <span key={actor.name + Math.random()} className={style.action}>{actor.name}&nbsp;&nbsp;</span>)
                      : ''
                    } */}
                  </div>
                  <div>
                    <span>{item.nation}&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <span>{item.runtime + '分钟'}</span>
                  </div>
                </div>
              }
            >
            </List.Item>)
          )
        }
      </List>
      {/* <InfiniteScroll loadMore={loadMore} hasMore={hasMore} /> */}
    </div>

  )
}

