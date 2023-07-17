'use client'
import Link from 'next/link'
import {TbPaperBag } from 'react-icons/tb'

export default function Cart () {
    return (
        <Link href='/cart'>
        <div className='flex items-center'>
            <div className='flex flex-col items-end'>
                <p className='m-0 p-0 cursor-pointer text-xs'> шт.</p>
                <p className='m-0 p-0 cursor-pointer text-sm font-bold'>0 грн.</p>
            </div>
            <TbPaperBag  className=' cursor-pointer h-12 w-12'/>
        </div>
        </Link>
    )
}
