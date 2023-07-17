
import React from 'react'
import { PizzaTypesList } from '../../components/PizzaTypesList'
import { Main } from '@/components/Main'
type listTypes = {
    "name":string,
    "id":number
}
export default function Sushilayout  ({children}:{children:React.ReactNode}) {
    let list:listTypes[] = [
        {"name":"НА ТОМАТАХ", "id":1},
        {"name":"НА ВЕРШКОВОМУ СОУСІ", "id":2},
        {"name":"ПІЦА СЕТИ", "id":3},
    ]
    return (
        <Main>
            <PizzaTypesList {...list}/>
            {children}
        </Main>
    )
}