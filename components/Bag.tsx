import { BagItem } from "@/components/BagItem"


async function getData() {
    const response = await fetch('http://localhost:5000/cart')
    return response.json()
}
type Props = {
    "id": number,
    "img":string,
    "price":number,
    "title":string
}
export default async function Bag () {
    const cartItems = await getData()
    return (
        <div className='flex flex-col'>
            {cartItems.length? cartItems.map((item:Props)=>(
                <BagItem id={item.id} img={item.img} price={item.price} title={item.title}></BagItem>
            )):null}
        </div>
    )
}