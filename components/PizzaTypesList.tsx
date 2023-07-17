import React from 'react'
import { PizzaTypesButton } from './PizzaTypesButton'

type Props = {
    "name":string,
    "id":number,
}

export const PizzaTypesList = (list:Props[]) => {
    console.log(list)
    return (
        <div className=' max-w-full mt-3'>
            {Object.values(list).map((item)=> (
                <PizzaTypesButton name={item.name} id={item.id}/>
            ))}
        </div>
    )
}