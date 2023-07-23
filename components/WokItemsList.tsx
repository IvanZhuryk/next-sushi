import React from 'react'
import { ProductItem } from './ProductItem'
type Props = {
    "id": number,
    "image":string,
    "price":number,
    "size":number,
    "title":string
}
async function getData() {

    const response = await fetch(`https://server-sushi.onrender.com/items?category=3`,{
        next:{
            revalidate:60
        }
    })
    return response.json()
}

export default async function WokItemList () {
    const items = await getData()
    return (
        <div className='flex items-center justify-around flex-wrap mt-5'>
            {items? items.map((item:Props)=>(
                <ProductItem key={item.id} id={item.id} img={item.image} price={item.price} size={item.size} title={item.title}/>
            )):null}
        </div>
    )
}