'use client'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { setitems } from '@/app/slices/cartSlice'
import React from 'react'
type Props = {
    "id": number,
    "img":string,
    "price":number,
    "size":number,
    "title":string
}

export const ItemButton = ({id, img, price, size, title}:Props) => {
    const dispatch = useAppDispatch()
    return (
        <button className=' bg-redBtn rounded text-white h-10 w-30 hover:scale-110 duration-300' onClick={()=>dispatch(setitems({id,image:img,price,size,title,count:0}))}>в Корзину</button>
    )
}
