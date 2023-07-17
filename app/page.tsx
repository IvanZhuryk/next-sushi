import { ProductItem } from "@/components/ProductItem"

async function getData() {
  const response = await fetch(`http://localhost:5000/favorites`,{
      
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
    <main className=" max-w-c ml-auto mr-auto">
      <h1 className=" ml-8 text-3xl font-medium">НАЙЧАСТІШЕ ЗАМОВЛЯЮТЬ</h1>
        <div className='flex items-center justify-start flex-wrap mt-5'>
        {items? items.map((item:Props)=>(
                  <ProductItem id={item.id} img={item.image} price={item.price} size={item.size} title={item.title}/>
              )):null}
        </div>
    </main>
  )
}
