
import React from 'react'
import { ProductItem } from './ProductItem'
type Props = {
    "id": number,
    "image":string,
    "price":number,
    "size":number,
    "title":string
}
async function getData(id:number) {
    let type:string|number = ''
    if(id>0){
        type = `type=${id}`
    }else{type=''}
    const response = await fetch(`https://server-sushi.onrender.com/items?category=1&${type}`,{
        next:{
            revalidate:60
        }
    })
    return response.json()
}
type ListProps = {
    "id":number
}
export default async function ItemList ({id}:ListProps) {
    const items = await getData(id)
    return (
        <div className='flex items-center justify-around flex-wrap mt-5'>
            {items? items.map((item:Props)=>(
                <ProductItem key={item.id} id={item.id} img={item.image} price={item.price} size={item.size} title={item.title}/>
            )):null}
        </div>
    )
}
