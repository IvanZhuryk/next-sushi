'use client'

import Modal from '@/components/Modal'
import Bag from './Bag'


type Props = {
    active:boolean,
    setActive:()=>void,
}

export default function CartOpen({active, setActive}:Props) {
    
    
    return (
        <Modal active={active} setActive={setActive}>
            <Bag/>
        </Modal>
    )
}