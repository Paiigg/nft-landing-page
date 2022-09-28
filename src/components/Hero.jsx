import React from 'react'
import { hero1, hero2 } from '../data'
import {FiArrowRight} from 'react-icons/fi'

const Hero = () => {
  return (
    <section className='bg-primary text-white'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <div className='flex justify-around flex-col md:flex-row items-center'>
          <div className='py-5 md:w-1/3'>
            <h1 className='text-6xl '>Discover <span className='font-semibold'> Rare Collection of Digital Art </span>and <span className='font-semibold'>NFT</span></h1>
            <p className='py-10'>Digital marketplace for crypto assets and non fungible tokens (NFT)</p>
            <div className='py-5 flex gap-5 items-center'>
              <img src={hero2} alt="" />
              <div>
                <p className='font-semibold'>100+</p>
                <p className='text-slate-400'>The best designers</p>
              </div>
            </div>
            <div className='flex items-center gap-5 py-5'>
            <p>Discover latest Artwork</p>
            <FiArrowRight/>
            </div>
            <div className='w-[63px] h-[2px] bg-green'></div>

          </div>
          <img src={hero1} alt="" />
          <div className='flex flex-row md:flex-col gap-10 py-10'>
            <div>
              <p className='font-semibold text-xl'>10.1K+</p>
              <p className='text-slate-400'>Art Work</p>
            </div>
            <div>
              <p className='font-semibold text-xl'>1.1M</p>
              <p className='text-slate-400'>Artist</p>
            </div>
            <div>
              <p className='font-semibold text-xl'>40K</p>
              <p className='text-slate-400'>Assets</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    
  )
}

export default Hero