import Link from 'next/link'
import React from 'react'

type Props = {
    "name":string,
    "id":number
}

export const PizzaTypesButton = ({name, id}:Props) => {
    return (
        <Link href={`/pizza/${id}`}><button className=' border-none rounded shadow-typeBut text-lg mr-5 font-bold opacity-60 w-max p-4 hover:opacity-100' >{name}</button></Link>
    )
}