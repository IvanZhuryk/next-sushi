'use client'
import Modal from '@/components/Modal'

type Props = {
    active:boolean,
    setActive:()=>void,
}

export default function Adresses({active, setActive}:Props) {
    
    
    return (
        <Modal active={active} setActive={setActive}>
            <div className='flex items-center justify-between'>
                <h3 className='m-0 p-0 font-bold' >АДРЕСИ ЗАКЛАДІВ</h3>
                <span className=' cursor-pointer font-semibold text-xl opacity-30 hover:opacity-100' onClick={()=>setActive()}>x</span>
            </div>
            <ul>
                <li className=' ml-4'>Руська 56</li>
                <li className=' ml-4'>Руська 56</li>
                <li className=' ml-4'>Руська 56</li>
            </ul>
            <h3 className='font-bold mb-3 mt-3'>СПОСІБ ОПЛАТИ</h3>
            <ul>
                <li className=' ml-4'>Готівкою при отриманні</li>
                <li className=' ml-4'>плата на сайті Приват24 (Liqpay)</li>
            </ul>
        </Modal>
    )
}