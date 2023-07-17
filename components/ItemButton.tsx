'use client'
import React from 'react'
type Props = {
    "id": number,
    "img":string,
    "price":number,
    "size":number,
    "title":string
}
async function postData({id,img,price,size,title}:Props) {
    const response = await fetch(`http://localhost:5000/cart`,{
        method:"POST",
        body: JSON.stringify({id,image:img,price,size,title}),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    return response.json()
}
export const ItemButton = ({id, img, price, size, title}:Props) => {
    return (
        <button className=' bg-redBtn rounded text-white h-10 w-30 hover:scale-110 duration-300' onClick={()=>postData({id,img,price,size,title})}>в Корзину</button>
    )
}
