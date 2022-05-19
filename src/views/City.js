import React, { useState } from 'react'
import store from '../redux'
// import {changeCity} from '../redux/action/cityAction' 

export default function City(props) {
    const [cityList] = useState(['上海', '深圳', '北京', '广州'])
    return (
        <div>
            <ul>
                {
                    cityList.map(city =>
                        <li key={city} onClick={()=>{
                            store.dispatch({
                                type:'change-city',
                                payload: city,
                            })
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
