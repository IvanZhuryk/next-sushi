'use client'
import React from 'react'
import Image from 'next/image'
import {MdDeleteForever} from 'react-icons/md'
import { useAppDispatch } from '@/app/hooks'
import { minusItem, plusItem, removeItem} from '@/app/slices/cartSlice'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
type Props = {
    "id": number,
    "img":string,
    "price":number,
    "title":string,
    "count":number
}
export const BagItem = ({id, img, price, title,count}:Props) => {
    const dispatch = useAppDispatch()
    return (
        <div key={id} className='flex items-center justify-around mb-2 md:mb-0'>
            <Image className=' hidden md:block' src={img} alt='product' width={60} height={60}></Image>
            <p className=' text-sm md:text-base md:w-75 w-32 text-center'>{title}</p>
            <div className='flex items-center w-24 justify-around'>
                <AiOutlinePlusCircle className=' w-6 h-6 m-2' onClick={()=>dispatch(plusItem({id}))}/>
                <span>{count}</span>
                <AiOutlineMinusCircle className=' w-6 h-6 m-2'  onClick={()=>dispatch(minusItem({id}))}/>
            </div>
            <span className=' text-sm md:text-lg w-20 text-center'>{price*count} грн.</span>
            <MdDeleteForever className=' h-6 w-6 cursor-pointer hover:scale-110 hover:text-red-500' onClick={()=>dispatch(removeItem({id}))}></MdDeleteForever>
        </div>    
    )
}