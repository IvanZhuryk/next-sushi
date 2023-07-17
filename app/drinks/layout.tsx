import { DrinksTypesList } from '@/components/DrinksTypesList'
import { Main } from '@/components/Main'
import React from 'react'
type listTypes = {
    "name":string,
    "id":number
}
export default function Sushilayout  ({children}:{children:React.ReactNode}) {
    let list:listTypes[] = [
        {"name":"ФІРМОВІ ЛИМОНАДИ", "id":1},
        {"name":"ВОДА", "id":2},
        {"name":"СОКИ", "id":3},
    ]
    return (
        <Main>
            <DrinksTypesList {...list}/>
            {children}
        </Main>
    )
}