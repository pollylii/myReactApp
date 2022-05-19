import MRouter from "./router";
import Tabbar from "./components/Tabbar";
import store from "./redux"


import React, { Component } from 'react'

export default class App extends Component {

  state = {
    isShow: true
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        isShow: store.getState().TabbarReducer.show
      })
    })
  }
  
  render() {
    return (
      <div className="App">
        <MRouter>
          {this.state.isShow && <Tabbar />}
        </MRouter>
      </div>
    )
  }
}
