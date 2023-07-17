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

    const response = await fetch(`http://localhost:5000/items?category=5`,{
        next:{
            revalidate:60
        }
    })
    return response.json()
}

export default async function SneksItemList () {
    const items = await getData()
    return (
        <div className='flex items-center justify-start flex-wrap mt-5'>
            {items? items.map((item:Props)=>(
                <ProductItem id={item.id} img={item.image} price={item.price} size={item.size} title={item.title}/>
            )):null}
        </div>
    )
}