
import PizzaItemList from '@/components/PizzaItemList'
import React from 'react'

export default function page ({params}:{params:{id:number}}) {
    return (
        <>
            <PizzaItemList id={params.id} ></PizzaItemList>
        </>
    )
}