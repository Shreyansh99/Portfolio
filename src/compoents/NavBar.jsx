import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'

const NavBar = () => {
    const [nav,setNav]=useState(false);
    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'Projects'
        },
        {
            id: 3,
            link: 'About Me'
        },
        {
            id: 4,
            link: 'Skills'
        },
        {
            id: 5,
            link: 'Contact'
        }
    ]
    return (
        <div className='flex items-center w-full h-20 text-#0d2438 bg-white fixed px-4 justify-between mt-5'>
            <div>
                <h1 className='text-5xl font-signature ml-1'>
                    Shreyansh
                </h1>
            </div>
            <ul className="hidden md:flex ">
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200 font-semibold '>
                        {link}
                    </li>
                ))}
            </ul>

            <div onClick={(e)=>setNav(!nav)} className='curser-pointer pr-4z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30}/> :<FaBars size={30}/>}
            </div>
            {nav &&  (<ul className="flex flex-col justify-items-center items-center absolute top-0 left-0 w-full h-screen bg-gray-100">
            {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        {link}
                    </li>
                ))}
            </ul>)}
           

        </div>
    )
}

export default NavBar