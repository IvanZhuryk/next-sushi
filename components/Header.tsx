'use client'
import React, { useState } from 'react'
import { MenuButton } from './MenuButton'
import { InfoBlock } from './InfoBlock'

import { Navigation } from './Navigation'


export const Header = ({children}:{children:React.ReactNode}) => {
    const [showMenu, setShowMenu] = useState(false)
    const setShow = () =>{
        setShowMenu(!showMenu)
    }
    return (
        <header className=' max-w-c ml-auto mr-auto '>
            <div className='flex justify-between h-18 items-center pl-2 pr-2 rounded-lg shadow-hed mb-2'>
                <MenuButton setShowMenu={setShow}/>
                <InfoBlock/>
                {children}
            </div>
            {showMenu? <Navigation></Navigation>: null}
        </header>
    )
}
