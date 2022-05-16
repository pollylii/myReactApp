import React, { Component } from 'react'

export default class ForList extends Component {
    state ={
        list:['1111','2222','3333']
    }
  render() {
    return (
      <div>
          {
              this.state.list.map((item,index) => <li key={index}>{item}</li>)
          }
      </div>
    )
  }
}
