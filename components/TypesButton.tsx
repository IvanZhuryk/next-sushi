
import Link from 'next/link'
import React from 'react'

type Props = {
    "name":string,
    "id":number
}

export const TypesButton = ({name, id}:Props) => {
    return (
        <Link href={`/sushi/${id}`}><button className=' border-none rounded shadow-typeBut text-lg mr-5 font-bold opacity-60 p-4 hover:opacity-100' >{name}</button></Link>
    )
}
