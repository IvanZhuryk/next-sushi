import DrinksItemList from '@/components/DrinksItemList'
import React from 'react'

export default function page ({params}:{params:{id:number}}) {
    return (
        <>
            <DrinksItemList id={params.id} ></DrinksItemList>
        </>
    )
}