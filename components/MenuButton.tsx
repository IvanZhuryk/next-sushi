
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {HiOutlineMenuAlt1} from 'react-icons/hi'

type Props = {
    setShowMenu: ()=> void
}
export const MenuButton = ({setShowMenu}:Props) => {
    return (
        <div className='flex items-center lg:w-78 2xl:w-96'>
            <Link className=' hidden lg:block' href='/'><Image className=' m-2' src='/logo.png ' alt='logo' width={161} height={34} ></Image></Link>
            <button className=' border-2 border-black rounded-3xl 2xl:h-10 flex items-center font-bold m-2' onClick={setShowMenu}>
                <HiOutlineMenuAlt1 className=' h-6 w-6 lg:h-6 lg:w-6 2xl:h-6 2xl:w-6 pl-1'/>
                <span className=' lg:text-sm 2xl:text-base m-2 lg:pr-4 hover:text-red-500'>Меню доставки</span>
            </button>
        </div>
    )
}
