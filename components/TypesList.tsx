
import React from 'react'
import { TypesButton } from './TypesButton'

type Props = {
    "name":string,
    "id":number,
}

export const TypesList = (list:Props[]) => {
    console.log(list)
    return (
        <div className=' max-w-full mt-3'>
            {Object.values(list).map((item)=> (
                <TypesButton name={item.name} id={item.id}/>
            ))}
        </div>
    )
}
