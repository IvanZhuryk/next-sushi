import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

function Footer() {
    return (
        <footer className='flex flex-col items-center justify-center'>
            <Link href='/'>
                <Image className=' mb-7' src='/logo.png' alt='logo' height={30} width={120}/>
            </Link>
            <div className=' mb-4'>
                <span className=' mr-3'>
                    <a href="tel:+38 666 66 66 666">+38 666 66 66 666</a>
                </span>
                <span className=' mr-3'>
                    <a href="tel:+38 666 66 66 666">+38 666 66 66 666</a>
                </span>
            </div>
            <div className='flex mb-2'>
                <BsFacebook className=' mr-3 h-12 w-12'></BsFacebook>
                <Link href='https://www.instagram.com/zhuryk.ivan/'><BsInstagram className='mr-3 h-12 w-12'></BsInstagram></Link>
            </div>

        </footer>
    )
}

export default Footer