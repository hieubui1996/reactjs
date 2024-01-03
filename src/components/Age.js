import React, { useState } from 'react'

export default function Age() {
    const [name, setName] = useState("")
    function handle_name(e){
        setName(e.target.value)
    }
    const [year, setYear] = useState("")
    function handle_age(e){
        setYear(e.target.value)
    }
    const [fullname, setFullname] = useState("")
    const [age, setAge] = useState("")
    const handle_keydown =(e) => {
        if (e.key == "Enter") {
            setAge(new Date().getFullYear() - year)
            setFullname(name)
    }
}
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const years = [...q1, ...q2, ...q3, ...q4];
console.log(years)



const o1 = {name: "meo", age: "2", sex:"female"}
const o2 = {name: "cho", age: "5", sex:"male"}
const list = {...o1,...o2}
console.log(list)





// Array 
// function nhan(x,y) {
//     return x * y
// }

// const nhan = (x , y) =>{
//     return x * y
// }

  return (
    <div>
        <h4>Nhập Họ và Tên:</h4>
       <input type='text' value={name} onChange={handle_name} placeholder='Nhập Họ và Tên' 
       onKeyDown={handle_keydown}/>
       <h4>Nhập Năm sinh:</h4>
       <input type='number' value={year} onChange={handle_age} placeholder='Nhập Năm sinh'
       onKeyDown={handle_keydown}/> <br />
       
       <h3>{fullname && "Họ và Tên: " + fullname} </h3>
       <h3>{age && "Tuổi: " + age + "tuổi" }</h3>
    </div>
  )
}
