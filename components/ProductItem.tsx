import React from 'react'
import Image from 'next/image'
import { ItemButton } from './ItemButton'

type Props = {
    "id": number,
    "img":string,
    "price":number,
    "size":number,
    "title":string
}
export const ProductItem = ({id, img, price, size, title}:Props) => {
    return (
        <div key={id} className=' h-85 w-75 rounded-lg shadow-hed flex justify-center flex-col items-center mt-8 mb-8 mr-1 ml-1'>
            <Image src={img} alt='product' width={210} height={205}></Image>
            <h4 className='text-sm font-bold m-0 p-0 text-center' >{title}</h4>
            <div className=' mb-1'>
                <span className='  text-gray-400 text-sm font-semibold'>{size} г./</span>
                <span className=' text-xl font-bold'>{price} грн.</span>
            </div>
            <ItemButton id={id} img={img} price={price} size={size} title={title}/>
        </div>
    )
}
