import React from 'react'
import { PizzaTypesButton } from './PizzaTypesButton'

type Props = {
    "name":string,
    "id":number,
}

export const PizzaTypesList = (list:Props[]) => {
    console.log(list)
    return (
        <div className='h-20 max-w-full m-2 flex z-10 pl-2 items-center overflow-x-scroll overflow-visible   md:overflow-visible'>
            {Object.values(list).map((item)=> (
                <PizzaTypesButton key={item.id} name={item.name} id={item.id}/>
            ))}
        </div>
    )
}