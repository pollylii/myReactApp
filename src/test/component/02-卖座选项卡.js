import React, { Component } from 'react'
import '../css/02-maizuo.css'
// import Film from './FilmCom'
import Film from './FilmFun'
import Cinema from './Cinema'
import Center from './Center'

export default class ForList extends Component {
    state = {
        list: [
            {
                id: '1',
                text: '电影'
            },
            {
                id: '2',
                text: '影院'
            },
            {
                id: '3',
                text: '我的'
            },
        ],
        current: 0,
    }
    changeCurrent(index) {
        this.setState({
            current: index
        })
    }
    which() {
        return this.state.current === 0 ? <Film></Film> : (this.state.current === 1 ? <Cinema></Cinema> : <Center></Center>)
    }
  
    render() {
        return (
            <div>
                {
                    this.which()
                }
                <ul className='m-ul'>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id} className={`m-li ${this.state.current === index ? 'active' : ''}`} onClick={() => this.changeCurrent(index)} >
                                {item.text}
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
