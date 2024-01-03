import React, { useState } from 'react'

export default function Account() {
    const [login, setLogin] = useState({id: 2, userName: "chandoiditu", mk: "12345678"})
    const [text, setText] =useState("")
    const [pass, setPass] = useState("")
    function handle_load() {
        let xyz = localStorage.getItem("taikhoan")
        xyz = JSON.parse(xyz)
        setLogin({...login, userName: xyz.userName, mk: xyz.mk})
        console.log(xyz)
    }
  return (
    <div>
        <button onClick={handle_load}>Load lại trang</button> <br />
        <h1>Sign In</h1>
        <input type='text' placeholder='Ten Dang Nhap' value={text} onChange={(e) =>setText(e.target.value)} 
        onKeyDown={(e) =>{
            if (e.key == "Enter") {
                setLogin ({...login,userName: text})
            }
        }}/> <br />
        <input type='password' placeholder='Mat khau' value={pass} onChange={(e) => setPass(e.target.value)}
        onKeyDown ={(e)=>{
            if (e.key ==  'Enter') {
                setLogin ({ ...login, mk:pass, userName: text})
                localStorage.setItem("taikhoan", JSON.stringify({ ...login, mk:pass, userName: text}))
            } 
        }}/> <br />
        <h3> Tên Đăng Nhập : {login.userName}, Mật khẩu: {login.mk}</h3>
    </div>
  )
}
