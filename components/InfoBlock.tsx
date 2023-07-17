'use client'
import {LuClock9} from 'react-icons/lu'
import {GoLocation} from 'react-icons/go'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import Info from '@/app/info/page'
import { useState } from 'react'
import Adresses from './Address'

export const InfoBlock = () => {
    const [aciteve, setactive] = useState(false)
    const setActiveClose = ()=>{
        setactive(false)
    }
    const [aciteveAdress, setactiveAdress] = useState(false)
    const setActiveAdressClose = ()=>{
        setactiveAdress(false)
    }
    return (
        <>
        <div className='flex items-center'>
            <div className='flex  mr-4 items-center cursor-pointer' >
                <LuClock9 className=' h-6 w-6 m-1'/>
                <span className=' font-bold'>10:00 - 21:30</span>
            </div>
                <div className='flex mr-4 items-center cursor-pointer' onClick={()=>setactive(true)}>
                    <GoLocation className=' h-6 w-6 m-1'/>
                    <span className=' font-bold'>Інформація</span>
                </div>
                <Info active={aciteve} setActive={setActiveClose}/>
            <div className='flex mr-4 items-center cursor-pointer'onClick={()=>setactiveAdress(true)}>
                <AiOutlineInfoCircle className=' h-6 w-6 m-1' />
                <span className=' font-bold'>Точки видачі</span>
            </div>
            <Adresses active={aciteveAdress} setActive={setActiveAdressClose}></Adresses>
            <div className='flex mr-4 items-center'>
                <BsFillTelephoneFill className=' h-6 w-6 m-1'/>
                <span className=' font-bold'>+38 666 66 66 666</span>
            </div>
        </div>
        </>
    )
}
