import React, { Component } from 'react'
import axios from 'axios'

class FilmList extends Component {
  state = {
    filmList: []
  }
  getFilmList = (param) => {
    if (param === 1) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1834624',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651907533991630639235073"}',
          'X-Host': 'mall.film-ticket.film.list',
        }
      }).then(res => {
        this.setState({
          filmList: res.data.data.films
        })
        console.log(111, this.state.filmList);
      })
    } else {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=1454123',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651907533991630639235073"}',
          'X-Host': 'mall.film-ticket.film.list',
        }
      }).then(res => {
        this.setState({
          filmList: res.data.data.films
        })
        console.log(2222, this.state.filmList);
      })
    }
  }

  // 初始化--执行一次
  componentDidMount() { 
    this.getFilmList(this.props.type)
  }
  static getDerviedFromProps(nextProps, nextState) {
    console.log(888, nextProps, nextState);
     return {
       type: nextProps.type
     }
    }
  componentDidUpdate(prevProps, prevState){
    if(this.props.type === prevProps.type){
      return
    }
    this.getFilmList(this.props.type)
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.filmList.map(item =>
              <li key={item.filmId}>{item.name}</li>
            )
          }
        </ul>
      </div>
    )
  }
}
export default class Film extends Component {
  state = {
    type: 1,
  }
  render() {
    return (
      <div>
        <ul>
          <li onClick={() => {
            this.setState({
              type: 1
            })
          }}>正在热映</li>
          <li onClick={() => {
            this.setState({
              type: 2
            })
          }}>即将上映</li>
        </ul>
        <FilmList type={this.state.type}></FilmList>
      </div>
    )
  }
}