import axios from 'axios'
import React, { Component } from 'react'

export default class ComingSoon extends Component {
  state = {
    filmList: []
  }
  
  getFilmList = () => {
    // optimus_uuid 猫眼电影设置了时效？次数
    //ajax/comingList?ci=30&limit=10&movieIds=&token=&optimus_uuid=EF69D7C0D65811ECA16AAB6147C9C886345E039BEC114EAC91EE9B6EACC90DFA&optimus_risk_level=71&optimus_code=10
    axios.get('/ajax/comingList?ci=30&limit=10&movieIds=&token=&optimus_uuid=161F2CB0D5ED11EC9FE64975ACF4C9B5A83AD0E75CBE4ECEB673B77CD7BCAEA9&optimus_risk_level=71&optimus_code=10').then(res => {
      this.setState({
        filmList: res.data.coming
      })
    })
  }

  componentDidMount() {
    this.getFilmList()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname === prevProps.location.pathname) {
      return
    }
  }

  render() {
    let list = this.state.filmList ? this.state.filmList : [{id: 1,nm: 'optimus_uuid时效已过'}]
    return (
      <div>
        <ul>
          {
            list.map(item =>
              <li key={item.id}>{item.nm}</li>
            )
          }
        </ul>
      </div>
    )
  }
}

