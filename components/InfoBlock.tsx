'use client'
import {LuClock9} from 'react-icons/lu'
import {GoLocation} from 'react-icons/go'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
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
        <div className='lg:flex lg:items-center hidden lg:w-120 2xl:w-150'>
            <div className='flex  mr-4 items-center cursor-pointer' >
                <LuClock9 className=' 2xl:h-6 2xl:w-6 m-1'/>
                <span className=' lg:text-sm 2xl:font-bold'>10:00 - 21:30</span>
            </div>
                <div className='flex mr-4 items-center cursor-pointer' onClick={()=>setactive(true)}>
                    <GoLocation className=' 2xl:h-6 2xl:w-6 m-1'/>
                    <span className='lg:text-sm 2xl:font-bold'>Інформація</span>
                </div>
                <Info active={aciteve} setActive={setActiveClose}/>
            <div className='flex mr-4 items-center cursor-pointer'onClick={()=>setactiveAdress(true)}>
                <AiOutlineInfoCircle className=' 2xl:h-6 2xl:w-6 2xl:m-1' />
                <span className='lg:text-sm 2xl:font-bold'>Точки видачі</span>
            </div>
            <Adresses active={aciteveAdress} setActive={setActiveAdressClose}></Adresses>
            <div className='flex mr-4 items-center'>
                <BsFillTelephoneFill className=' 2xl:h-6 2xl:w-6 m-1'/>
                <span className='lg:text-sm 2xl:font-bold'>+38 666 66 66 666</span>
            </div>
        </div>
        </>
    )
}
