import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Navigation = () => {
    return (
        <nav className=' flex justify-between mb-12 mt-12 overflow-x-scroll overflow-y-visible h-22 2xl:overflow-visible '>
                <Link href='/sushi'>
                    <div className='flex flex-col items-center h-21 w-25 pb-1'>
                        <Image src='/sushi.jpg' alt='sushi' width={60} height={60} className=' mb-1'/>
                        <span className=' text-sm 2xl:text-base'>СУШІ</span>
                    </div>
                </Link>
                <Link href='/pizza'>
                    <div className='flex flex-col items-center h-21 w-25 pb-1'>
                        <Image src='/pizas.jpg' alt='sushi' width={60} height={60} className=' mb-1'/>
                        <span className='text-sm 2xl:text-base'>ПІЦА</span>
                    </div>
                </Link>
                <Link href='/wok'>
                    <div className='flex flex-col items-center h-21 w-25 pb-1'>
                        <Image src='/wok.jpg' alt='sushi' width={60} height={60} className=' mb-1'/>
                        <span className='text-sm 2xl:text-base'>WOK</span>
                    </div>
                </Link>
                <Link href='/selets'>
                    <div className='flex flex-col items-center h-21 w-25 pb-1'>
                        <Image src='/selets.jpg' alt='sushi' width={60} height={60} className=' mb-1'/>
                        <span className='text-sm 2xl:text-base'>САЛАТИ</span>
                    </div>
                </Link>
                <Link href='/sneks'>
                    <div className='flex flex-col items-center h-21 w-25 pb-1'>
                        <Image src='/sneks.jpg' alt='sushi' width={60} height={60} className=' mb-1'/>
                        <span className='text-sm 2xl:text-base'>СНЕКИ</span>
                    </div>
                </Link>
                <Link href='/deserts'>
                    <div className='flex flex-col items-center h-21 w-25 pb-1'>
                        <Image src='/deserts.png' alt='sushi' width={60} height={60} className=' mb-1'/>
                        <span className='text-sm 2xl:text-base'>ДЕСЕРТИ</span>
                    </div>
                </Link>
                <Link href='/drinks'>
                    <div className='flex flex-col items-center h-21 w-25 pb-1'>
                        <Image src='/drinks.jpg' alt='sushi' width={60} height={60} className=' mb-1'/>
                        <span className='text-sm 2xl:text-base'>НАПОЇ</span>
                    </div>
                </Link>
            </nav>
    )
}
