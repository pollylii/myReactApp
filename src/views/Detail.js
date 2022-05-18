import React,{useEffect} from 'react'
import store from '../redux'
import { hide,show } from '../redux/action/tabbarAction'


export default function Detail(props) {
  useEffect(()=>{
    // 通知
    store.dispatch(hide())
    return ()=>{
      store.dispatch(show())
    }
  }, [])
  
  return (
    <div>{props.match.params.filmId}</div>
  )
}
