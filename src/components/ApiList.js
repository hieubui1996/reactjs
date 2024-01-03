import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function ApiList() {
    const [list,setList] =useState([])
    let url = "https://658c2928859b3491d3f59b99.mockapi.io/list"
    useEffect(() =>{
        axios.get(url).then(function(res){
            console.log(res.data)
            setList(res.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }, [])
  return (
    <div key='index'>
        {list.map((item, index) =>(
            <div>{item.id}, {item.name} , {item.word} </div>
        ))}
    </div>
  )
}
