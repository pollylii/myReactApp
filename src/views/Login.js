import React, { useState } from 'react'

export default function Login(props) {

    const [tokenName, settokenName] = useState('')

    const inputChange = (e) => {
        settokenName(e.target.value)
    }

    const isAuth = () => {
        if (tokenName === '123') {
            localStorage.setItem('token', tokenName)
            props.history.push('/center')
        }else{
            alert('用户不存在！')
        }
    }
    return (
        <div>
            <h1>登录页面</h1>
            <span>用户</span>
            <input typeof='text' onChange={(e) => inputChange(e)} />
            <button onClick={()=>isAuth()}>登录</button>
        </div>
    )
}
