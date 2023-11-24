import Image from 'next/image'

import React from 'react'


type ButtonProps={
type: 'button'|'submit',
title:string,
icon?:string,
variant:string,
full?:boolean,
}
const Button = ({title,type,icon,variant,full}:ButtonProps) => {
  return (
    <button type={type} className={`${variant} flexCenter gap-3 rounded-full border xl:w-52 ${full && "w-full"}`}>
        {icon && <Image src={icon} alt='' width={24} height={24}/>}
       <label className='bold-16 whitespace-nowrap cursor-pointer'> {title}</label>
    </button>
  )
}

export default Button