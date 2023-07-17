import React from 'react'
import { DrinksTypesButton } from './DrinksTypesButton'


type Props = {
    "name":string,
    "id":number,
}

export const DrinksTypesList = (list:Props[]) => {
    console.log(list)
    return (
        <div className=' max-w-full mt-3'>
            {Object.values(list).map((item)=> (
                <DrinksTypesButton name={item.name} id={item.id}/>
            ))}
        </div>
    )
}