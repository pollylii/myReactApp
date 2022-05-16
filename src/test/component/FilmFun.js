import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FilmList(props) {
    const [list, setlist] = useState([])
    useEffect(() => {
        if (props.type === 1) {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1834624',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651907533991630639235073"}',
                    'X-Host': 'mall.film-ticket.film.list',
                }
            }).then(res => {
                setlist(res.data.data.films)
            })
        } else {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=1454123',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651907533991630639235073"}',
                    'X-Host': 'mall.film-ticket.film.list',
                }
            }).then(res => {
                setlist(res.data.data.films)
            })
        }
    }, [props.type])

    return (
        <div>
            <ul>
                {
                    list.map(item =>
                        <li key={item.filmId}>{item.name}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default function Film() {
    const [type, settype] = useState()
    return (
        <div>
            <ul>
                <li onClick={() => { settype(1) }}>正在热映</li>
                <li onClick={() => { settype(2) }}>即将上映</li>
            </ul>
            <FilmList type={type}></FilmList>
        </div>
    )
}
