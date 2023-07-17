import React from 'react'
import Image from 'next/image'

type Props = {
    "id": number,
    "img":string,
    "price":number,
    "title":string
}
export const BagItem = ({id, img, price, title}:Props) => {
    return (
        <div key={id} className='flex items-center justify-around'>
            <Image src={img} alt='product' width={60} height={60}></Image>
            <p className=' w-72'>{title}</p>
            <span className=' text-lg'>{price} грн.</span>
        </div>    
    )
}