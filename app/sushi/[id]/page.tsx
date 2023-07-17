import ItemList from '@/components/ItemsSushiList'
import React from 'react'

export default function page ({params}:{params:{id:number}}) {
  
  return (
    <>
      <ItemList id={params.id} ></ItemList>
    </>
  )
}
