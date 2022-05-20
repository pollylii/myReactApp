import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import store from '../redux'
import getCinemaListAction from '../redux/action/getCinemaListAction'

function Cinemas(props) {

  // const [cityName] = useState(store.getState().CityReducer.cityName)
  // const [cinemasList, setCinemasList] = useState(store.getState().CinemasReducer.list)
  
  let { cinemasList, getCinemaListAction } = props
  
  useEffect(() => {
    if (cinemasList.length === 0) {
      // store.dispatch(getCinemaListAction())
      getCinemaListAction()
    } else {
      console.log('缓存');
    }
  }, [cinemasList,getCinemaListAction])

  return (
    <div>
      <div style={{ overflow: 'hidden' }}>
        <div onClick={() => {
          props.history.push('/city')
        }} style={{ float: 'left' }}>
          {props.cityName}
        </div>
        <div onClick={() => {
          props.history.push('/cinemas/search')
        }} style={{ float: 'right' }}>搜索</div>
      </div>
      {
        props.cinemasList.map(item =>
          <dl key={item.cinemaId} style={{ padding: '10px' }}>
            <dt>{item.name}</dt>
            <dd style={{ fontSize: '12px', color: 'gray' }}>{item.address}</dd>
          </dl>)
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cityName: state.CityReducer.cityName,
    cinemasList: state.CinemasReducer.list
  }
}
const mapDispatchToProps = {
  getCinemaListAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Cinemas) 