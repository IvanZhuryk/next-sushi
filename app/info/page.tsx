'use client'
import Modal from '@/components/Modal'

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
            <h3 className=' pb-3 pt-3 font-semibold'>УМОВИ ДОСТАВКИ</h3>
            <p className='pb-2'>Вартість мінімального замовлення у м. Тернопіль</p>
            <ul>
                <li className=' ml-4'>Суші 300 ₴</li>
                <li className=' ml-4'>Піца 300 ₴</li>
                <li className=' ml-4'>Спільного 300 ₴</li>
            </ul>
            <p className=' mt-4 mb-4'>Вартість мінімального замовлення у приміській зоні - 400 ₴</p>
            <h3 className='font-bold'>Спосіб оплати</h3>
            <ul>
                <li className=' ml-4'>Готівкою при отриманні</li>
                <li className=' ml-4'>Оплата на сайті Приват24 (Liqpay)</li>
            </ul>
        </Modal>
    )
}
