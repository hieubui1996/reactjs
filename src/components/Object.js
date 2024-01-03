import React, { useState } from 'react'

export default function Object() {
    const [sv, setSv] = useState({id:1, name:"Le Van Meo", age: 18 })
    const [text, setText] = useState("")
    const [age, setAge] = useState("")
    function handle_load() {
        let x = localStorage.getItem("sv_key")
        console.log(x)
        setSv({...sv, name: x}
        )
    }
  return (
    <div>
        <button onClick={handle_load}>Load lai trang</button> <br />
        <input type='text' 
        placeholder='Nhập tên' 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) =>{
            if (e.key == "Enter") {
                setSv({ ...sv, name: text})
            }
        }} 
        /> <br />
        <input 
        type='number' 
        placeholder='Nhập tuổi' 
        value={age} 
        onChange={(e) => setAge(e.target.value)}
        onKeyDown={(e) => {
            if (e.key == "Enter") {
                setSv({ ...sv, age:age, name: text})
                localStorage.setItem("sv_key", text + " " + age)
            }
        }
        } 
        /> <br/>
        <p>Name: {sv.name}, Age: {sv.age}</p>
    </div>
  )
}
