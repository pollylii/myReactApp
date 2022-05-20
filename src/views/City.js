import React, { useState } from 'react'
import { connect } from 'react-redux'
// import store from '../redux'
// import { changeCity } from '../redux/action/cityAction'
function City(props) {
    const [cityList] = useState(['上海', '深圳', '北京', '广州'])
    return (
        <div>
            <ul>
                {
                    cityList.map(city =>
                        <li key={city} onClick={() => {
                            props.change('change-city', city)
                            // store.dispatch(changeCity('change-city',city))
                            // props.history.push('/cinemas')
                            props.history.goBack()
                        }}>
                            {city}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
const mapDispatchToProps = {
    change(type, payload) {
        return {
            type,
            payload
        }
    }
}
export default connect(null,mapDispatchToProps)(City)