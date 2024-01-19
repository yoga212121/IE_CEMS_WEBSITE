import React from 'react'
import Logo from './images/IE NITK Logo/final_copy.png'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
        <Image src={Logo} alt="IE Logo" width={100} quality={50} placeholder='blur' />
    </nav>
  )
}
