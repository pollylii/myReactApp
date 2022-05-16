import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function useEffectTest() {

    const [list, setList] = useState([])
    
    useEffect(() => {
        axios.get("test.json").then(res => {
            setList(res.data.data.films)
        })
    }, [])

    return (
        <div>
            <ul>
                {
                    list.map(item =>
                        <li key={item.filmId}>
                            {item.name}
                        </li>)
                }
            </ul>
        </div>
    )
}
