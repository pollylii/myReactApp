import axios from 'axios'
import React, { Component } from 'react'

export default class ComingSoon extends Component {
  componentDidMount() {
    axios.get('/ajax/comingList?ci=30&limit=10&movieIds=&token=&optimus_uuid=161F2CB0D5ED11EC9FE64975ACF4C9B5A83AD0E75CBE4ECEB673B77CD7BCAEA9&optimus_risk_level=71&optimus_code=10').then(res => {
      console.log(9999, res);
    })
  }
  render() {
    return (
      <div>ComingSoon</div>
    )
  }
}

// https://i.maoyan.com/ajax/comingList?ci=30&limit=10&movieIds=&token=&optimus_uuid=161F2CB0D5ED11EC9FE64975ACF4C9B5A83AD0E75CBE4ECEB673B77CD7BCAEA9&optimus_risk_level=71&optimus_code=10