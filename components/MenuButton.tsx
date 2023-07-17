
import React from 'react'
import {HiOutlineMenuAlt1} from 'react-icons/hi'

type Props = {
    setShowMenu: ()=> void
}
export const MenuButton = ({setShowMenu}:Props) => {
    return (
        <button className=' border-2 border-black rounded-3xl h-10 flex items-center font-bold m-2' onClick={setShowMenu}>
            <HiOutlineMenuAlt1 className=' h-6 w-6 pl-1'/>
            <span className=' text-base m-2 pr-4 hover:text-red-500'>Меню доставки</span>
        </button>
    )
}
