import React, { useState } from 'react'
import {FiMenu, FiX} from "react-icons/fi"

const Navbar = () => {

  const [nav,setNav] = useState(false);
  const [search,setSearch] = useState(false);

  const handleNav = ()=> {
    setNav(!nav);   
  }
  const handleSearch = ()=> {
    setSearch(!search);   
  }

  return (
    <header className='bg-primary text-white sticky z-50 top-0 left-0'>
      <nav className='max-w-[1240px] px-4 mx-auto py-5'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-20 items-center md:w-1/2'>
            <h1 className='text-xl font-bold'>Aking.</h1>
            <ul className='hidden md:flex gap-14'>
              <li className=' hover:text-green'>Discover</li>
              <li className=' hover:text-green'>Marketplace</li>
              <li className=' hover:text-green'>How it work</li>
            </ul>

          </div>
          <div className='flex gap-5 items-center '>
            <i onClick={handleSearch} className='bx bx-search-alt cursor-pointer text-green text-xl'></i>
            <input type="text" placeholder='Search'  className={search ? 'rounded-xl focus:outline-none bg-slate-100 px-4 py-2 text-black md:static absolute top-[90px] w-full md:w-auto  left-0 transition ease duration-500 ' : "hidden absolute top-[-100%] w-full left-0"} />
            <button className='border border-green rounded-xl text-green px-6 py-3'>Connect Wallet</button>
          </div>
          <div className='block md:hidden' onClick={handleNav}>
            {nav ? <FiX size={30}/> : <FiMenu size={30}/> } 
          </div>
        </div>
        <div className='bg-primary '>
          <ul className={nav ? 'flex flex-col gap-10 py-10 md:hidden absolute top-[90px] left-0 bg-primary w-full items-center text-center duration-500 ' : 'absolute top-[90px] left-[-100%]'}>
                <li className='hover:text-green'>Discover</li>
                <li className=' hover:text-green'>Marketplace</li>
                <li className=' hover:text-green'>How it work</li>
          </ul>
        </div>

      </nav>
    </header>
  )
}

export default Navbar