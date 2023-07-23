import React from 'react'
import { BagItem } from './BagItem'
async function getData() {
    const response = await fetch('http://localhost:5000/cart',{
        next: {
            revalidate:60
        }
    })
    return response.json()
}
type Props = {
    "id": number,
    "image":string,
    "price":number,
    "title":string,
    "count":number
}
export default async function CartModal (){
    const cartItems = await getData()
    return (
        
            <div className=' bg-white rounded-xl p-5 w-vw-30'>
                <div className='flex flex-col'>
                    {cartItems.length? cartItems.map((item:Props)=>(
                        <BagItem key={item.id} id={item.id} img={item.image} price={item.price} title={item.title} count={item.count}></BagItem>
                    )):null}
                </div>
            </div>
    )
}