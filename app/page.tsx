import { Main } from "@/components/Main"
import { ProductItem } from "@/components/ProductItem"

async function getData() {
  const response = await fetch(`https://server-sushi.onrender.com/favorites`,{
      
  })
  return response.json()
}
type Props = {
  "id": number,
  "image":string,
  "price":number,
  "size":number,
  "title":string
}
export default async function Home() {
  const items = await getData()
  return (
    <Main>
      <h1 className=" ml-8 text-3xl font-medium text-center md:text-left">НАЙЧАСТІШЕ ЗАМОВЛЯЮТЬ</h1>
        <div className='flex items-center justify-around flex-wrap mt-5'>
        {items? items.map((item:Props)=>(
                  <ProductItem key={item.id} id={item.id} img={item.image} price={item.price} size={item.size} title={item.title}/>
              )):null}
        </div>
    </Main>
  )
}
