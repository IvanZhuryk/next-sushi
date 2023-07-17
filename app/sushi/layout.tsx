
import { Main } from '@/components/Main'
import { TypesList } from '@/components/TypesList'
import React from 'react'
type listTypes = {
    "name":string,
    "id":number
}
export default function Sushilayout  ({children}:{children:React.ReactNode}) {
    let list:listTypes[] = [
        {"name":"XL ФІЛЯДЕЛЬФІЯ", "id":1},
        {"name":"ФІЛЯДЕЛЬФІЯ", "id":2},
        {"name":"КАЛІФОРНІЯ", "id":3},
        {"name":"ДРАКОНИ", "id":4},
        {"name":"РОЛИ 39", "id":5},
        {"name":"ГАРЯЧІ РОЛИ", "id":6},
        {"name":"СУШІ БУРГЕР", "id":7},
        {"name":"МАКІ", "id":8},
        {"name":"СУШІ СЕТИ", "id":9}
    ]
    return (
        <Main>
            <TypesList {...list}/>
            {children}
        </Main>
    )
}
