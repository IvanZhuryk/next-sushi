import React from 'react'
import { DrinksTypesButton } from './DrinksTypesButton'


type Props = {
    "name":string,
    "id":number,
}

export const DrinksTypesList = (list:Props[]) => {
    console.log(list)
    return (
        <div className=' h-20 max-w-full flex mt-3 pl-2 items-center overflow-x-scroll overflow-visible   md:overflow-visible'>
            {Object.values(list).map((item)=> (
                <DrinksTypesButton key={item.id} name={item.name} id={item.id}/>
            ))}
        </div>
    )
}