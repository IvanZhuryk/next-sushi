'use client'

import { useRouter } from "next/navigation"

export default function Cartlayout({children}:{children:React.ReactNode}) {
    const router = useRouter()
    return (
        <div className='flex items-center justify-center bg-modal left-0 top-0 h-hv w-vw fixed opacity-100' onClick={() => router.back()}>
            {children}
        </div>
    )
}