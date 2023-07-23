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
        <header className=' 2xl:w-1536 ml-auto mr-auto '>
            <div className=' flex justify-between lg:h-18 lg:flex lg:items-center lg:justify-between 2xl:flex 2xl:justify-between 2xl:h-18 2xl:items-center pl-2 pr-2 rounded-lg shadow-hed mb-2'>
                <MenuButton setShowMenu={setShow}/>
                <InfoBlock/>
                {children}
            </div>
            {showMenu? <Navigation></Navigation>: null}
        </header>
    )
}
