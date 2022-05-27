import MRouter from "./router";
import MyTabbar from "./components/MyTabbar";
// import store from "./redux"

import React, { Component } from 'react'
import { connect } from "react-redux";

class App extends Component {

  // state = {
  //   isShow: true
  // }

  componentDidMount() {
    // store.subscribe(() => {
    //   this.setState({
    //     isShow: store.getState().TabbarReducer.show
    //   })
    // })
  }

  render() {
    return (
      <div className="App">
        <MRouter>
          {this.props.isShow && <MyTabbar />}
        </MRouter>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isShow: state.TabbarReducer.show
  }
}
export default connect(mapStateToProps)(App)