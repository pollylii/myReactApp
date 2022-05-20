import React, { useEffect, useState, useMemo } from 'react'
import {store} from '../redux'
import getCinemaListAction from '../redux/action/getCinemaListAction'


export default function Search() {
    const [mytext, setMytext] = useState('')
    const [cinemasList, setCinemasList] = useState(store.getState().CinemasReducer.list)

    useEffect(() => {
        let len = store.getState().CinemasReducer.list.length
        if (len === 0) {
            store.dispatch(getCinemaListAction())
        } else {
            console.log('缓存');
        }
        var unSubscribe = store.subscribe(() => {
            setCinemasList(store.getState().CinemasReducer.list)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const getCinemasList = useMemo(() =>
        cinemasList.filter(item => item.name.toUpperCase().includes(mytext.toUpperCase())), 
        [cinemasList, mytext]
    )

    return (
        <div>
            <input value={mytext} onChange={e => { setMytext(e.target.value) }} />
            {
                getCinemasList.map(item =>
                    <dl key={item.cinemaId} style={{ padding: '10px' }}>
                        <dt>{item.name}</dt>
                        <dd style={{ fontSize: '12px', color: 'gray' }}>{item.address}</dd>
                    </dl>)
            }
        </div>
    )
}
