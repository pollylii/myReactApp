import React from 'react'
import { withRouter } from 'react-router-dom';

function Center(props) {
  console.log('detail props', props);
  return (
    <div>
      <div onClick={()=>{
        props.history.push('/filmsorder')
      }}>电影订单</div>
    </div>
  )
}

export default withRouter(Center)