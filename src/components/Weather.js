import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Weather.css'
export default function Weather() {
    const apikey ="e0ddc538b3415427caeb7901218a30dd"
    const [text,setText] = useState("ho chi minh")
    const [data,setData] = useState("")
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${apikey}`
    const getData =() => {
        axios.get(url).then(function (res){
            setData (res.data)
            console.log (res.data)
        })
    }
    useEffect (() => {
        getData()
        
    }, [])
  return (
    <div className='main'>
        <div className='search-bar'>
        <input className='top' placeholder='Nhập tên thành phố' value={text} onChange={(e)=> setText(e.target.value)} 
                onKeyDown={(e=>{
                    if (e.key=='Enter' && text) {
                        getData()
                    }
                }) } />


        </div>
        <div className='contain'>
        <h1 className='country'>Country: {data && data.sys.country}</h1>
        <h2 className='city' >City Name: {data && data.name}</h2>
        <h3 className='temp'>{data && data.main.temp}&deg;C</h3>
        <h3>Description: {data && data.weather[0].description}</h3>
        <p>Sunrise: {new Date(data && data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(data && data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        
        <img src={`http://openweathermap.org/img/w/${data && data.weather[0].icon}.png`}/>
        </div>
    </div>
  )
}
