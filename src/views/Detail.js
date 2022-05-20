import React, { useEffect } from 'react'
import { connect } from "react-redux";
// import store from '../redux'
import { hide, show } from '../redux/action/tabbarAction'


function Detail(props) {
  let { show, hide } = props
  useEffect(() => {
    hide()
    return () => {
      show()
    }
  }, [show, hide])

  return (
    <div>{props.match.params.filmId}</div>
  )
}
const mapDispatchToProps = {
  show,
  hide
}
// connect的第一个参数给孩子传的属性，第二个参数是给孩子传的函数
export default connect(null, mapDispatchToProps)(Detail)