
import React from 'react'
import { TypesButton } from './TypesButton'

type Props = {
    "name":string,
    "id":number,
}

export const TypesList = (list:Props[]) => {
    console.log(list)
    return (
        <div className=' h-20 flex items-center pl-2 m-2 z-10 overflow-x-scroll overflow-visible   2xl:overflow-visible'>
            {Object.values(list).map((item)=> (
                <TypesButton name={item.name} id={item.id}/>
            ))}
        </div>
    )
}
