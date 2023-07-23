'use client'
import {useEffect, useState} from 'react'
import {TbPaperBag } from 'react-icons/tb'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { setItemsFromLocal, setitems } from '@/app/slices/cartSlice'
import Modal from './Modal'
import { BagItem } from './BagItem'

type Props = {
    "id": number,
    "image":string,
    "price":number,
    "size":number,
    "title":string,
    "count":number
}
export default function Cart () {

    const list = useAppSelector((state) => state.cartSlice.list)
    const dispatch = useAppDispatch()
    const [totalPrice,setTotalPrice] = useState(0)
    const [totalCount,setTotalCount] = useState(0)
    const [aciteve, setactive] = useState(false)
    const setActiveClose = ()=>{
        setactive(false)
    }
    const sumTotalPrice = (list:Props[]) =>{
        setTotalPrice(list.reduce((sum,obj)=>{
            return  obj.price * obj.count + sum
        },0))
    }
    const sumTotalCount = (list:Props[]) =>{
        setTotalCount(list.reduce((sum,obj)=>{
            return  obj.count + sum
        },0))
    }
    useEffect(()=>{
        const data = window.localStorage.getItem('CART_ITEMS')
        if(data){dispatch(setItemsFromLocal(JSON.parse(data)))}
    },[])
    useEffect(()=>{
        window.localStorage.setItem('CART_ITEMS', JSON.stringify(list))
    },[list])
    useEffect(()=>{
        sumTotalPrice(list)
    },[list])
    useEffect(()=>{
        sumTotalCount(list)
    },[list])
    return (
        <>
        <div className='flex items-center lg:w-36' onClick={()=>setactive(true)}>
            <div className='flex flex-col items-end'>
                <p className='m-0 p-0 cursor-pointer text-xs'>{totalCount}шт.</p>
                <p className='m-0 p-0 cursor-pointer text-sm font-bold'>{totalPrice} грн.</p>
            </div>
            <TbPaperBag  className=' cursor-pointer h-12 w-12'/>
            
        </div>
        <Modal active={aciteve} setActive={setActiveClose}>
            <div className='flex flex-col'>
                <div className='flex items-center'>
                    <h1 className=' ml-auto mr-auto font-bold text-2xl mt-5'>Корзина покупок</h1>
                    <span className=' cursor-pointer font-semibold text-xl opacity-30 hover:opacity-100' onClick={()=>setActiveClose()}>x</span>
                </div>   
                <div className={list.length? ' max-h-hv-50 overflow-y-scroll ':''}>
                    {list.length? list.map((item:Props)=>(
                        <BagItem key={item.id} id={item.id} img={item.image} price={item.price} title={item.title} count={item.count}></BagItem>
                    )):<h2 className=' text-center text-lg mt-3 font-medium'>Корзина пуста!</h2>}
                </div>
            </div>
        </Modal>
    </>
    )
}
