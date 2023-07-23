'use client'

import Modal from "./Modal"


type Props = {
    active:boolean,
    setActive:()=>void,
}

export default function Info({active, setActive}:Props) {
    
    
    return (
        <Modal active={active} setActive={setActive}>
            <div className='flex items-center justify-between'>
                <h3 className='m-0 p-0 font-bold' >ДОСТАВКА І ОПЛАТА</h3>
                <span className=' cursor-pointer font-semibold text-xl opacity-30 hover:opacity-100' onClick={()=>setActive()}>x</span>
            </div>
            <p>Вартість мінімального замовлення у м. Тернопіль</p>
            <ul>
                <li className=' ml-4'>Суші – 300 ₴</li>
                <li className=' ml-4'>Піца– 300 ₴</li>
                <li className=' ml-4'>Спільного – 300 ₴</li>
            </ul>   
            <h3 className='font-bold mb-3 mt-3'>СПОСІБ ОПЛАТИ</h3>
            <ul>
                <li className=' ml-4'>Готівкою при отриманні</li>
                <li className=' ml-4'>плата на сайті Приват24 (Liqpay)</li>
            </ul>
        </Modal>
    )
}