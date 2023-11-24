import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className=" flexBetween max-container padding-container relative z-30 py-5">
        <Link href={"/"}>
            <Image src={"/hilink-logo.svg"} alt='' width={74} height={29}/>
        </Link>

        <ul className='hidden h-full gap-12 lg:flex '>
            {
                NAV_LINKS.map(link=>(
                    <Link href={link.href} key={link.key} className='reqular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ' >{link.label} </Link>
                ))
            }
        </ul>

        <div className='hidden lg:flexCenter'>
                <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
        </div>
        <Image src={"/menu.svg"} alt='' width={32} height={32} className='lg:hidden inline-block cursor-pointer'/>
    </div>
  )
}

export default Navbar