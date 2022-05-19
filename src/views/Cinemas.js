import React, { useEffect, useState } from 'react'
import store from '../redux'
import getCinemaListAction from '../redux/action/getCinemaListAction'

export default function Cinemas(props) {

  const [cityName] = useState(store.getState().CityReducer.cityName)
  const [cinemasList, setCinemasList] = useState(store.getState().CinemasReducer.list)

  useEffect(() => {
    let len = store.getState().CinemasReducer.list.length
    if (len === 0) {
      store.dispatch(getCinemaListAction())
    } else {
      console.log('缓存');
    }
    var unSubscribe = store.subscribe(() => {
      console.log('订阅', store.getState().CinemasReducer.list);
      setCinemasList(store.getState().CinemasReducer.list)
    })
    return () => {
      unSubscribe()
    }
  }, [])

  return (
    <div>
      <div style={{overflow:'hidden'}}>
        <div onClick={() => {
          props.history.push('/city')
        }} style={{float:'left'}}>
          {cityName}
        </div>
        <div  onClick={()=>{
          props.history.push('/cinemas/search')
        }} style={{float:'right'}}>搜索</div>
      </div>
      {
        cinemasList.map(item =>
          <dl key={item.cinemaId} style={{ padding: '10px' }}>
            <dt>{item.name}</dt>
            <dd style={{ fontSize: '12px', color: 'gray' }}>{item.address}</dd>
          </dl>)
      }
    </div>
  )
}
