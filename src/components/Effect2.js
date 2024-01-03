import React, { useEffect, useState } from 'react'

export default function Effect2() {
    const [quant, setQuant] = useState(1)
    const [price, setPrice] = useState(0)

    const handle_quant = () => {
        setQuant(quant + 1)
    }

    const handle_price = () => {
        setPrice(price + 100)
    }
    useEffect(() =>{
        setPrice(price + 100)
    }, [quant])
  return (
    <div>
        <h1>Quant : {quant}</h1>
        <input type='button' value="Quant" onClick={handle_quant}/> <br />
        <h1>Price : {price}</h1>
        <input type='button' value="Price" onClick={handle_price}/> <br />
    </div>
  )
}
