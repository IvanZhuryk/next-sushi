'use client'
import React from 'react'

interface ModalProps {
    active:boolean
    setActive:()=>void
    children: React.ReactNode
}
export default function Modal ({ active, setActive, children}: ModalProps){
    return (
        <div className={active?'flex items-center justify-center z-20 bg-modal left-0 top-0 h-hv w-vw fixed opacity-100':'flex items-center justify-center bg-modal left-0 top-0 h-hv w-vw fixed opacity-0'} style={active?{pointerEvents:"all"}:{pointerEvents:'none'}} onClick={()=>setActive() }>
            <div className=' bg-white rounded-xl p-5 w-vw xl:w-vw-50 ' onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
