import React, { useState } from 'react'

export default function useStateTest() {
    const [list, setList] = useState(['aa', 'bb', 'cc'])
    const [text, settext] = useState("")

    const handleChange = (event) => {
        settext(event.target.value)
    }

    const handleAdd = () => {

        setList([...list,text])
        settext('')
    }

    const handleDel = (index) => {
        let newList = [...list]
        newList.splice(index,1)
        setList(newList)
    }
    return (
        <div>
            <input onChange={handleChange} value={text}/>
            <button onClick={handleAdd}>add</button>
            <ul>
                {
                    list.map((item,index) =>
                    <li key={index}>
                        {item}
                        <button onClick={() => handleDel(index)}>del</button>
                    </li>)
                }
            </ul>
            {!list.length && <div>暂无待办事项</div>}
        </div>
    )
}
