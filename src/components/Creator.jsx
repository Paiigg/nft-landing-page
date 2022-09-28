import React from 'react'
import { creator1, creator2, creator3, creator4, creator5, creator6, eth } from '../data'

const Creator = () => {
  return (
    <section className='bg-primary'>
      <div className='max-w-[1240px] mx-auto px-4 py-10 text-white'>
        <h2 className='text-center font-semibold py-5  text-2xl'>Top Creator</h2>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='bg-secondary rounded-xl m-2 flex items-center justify-between px-4 py-4'>
            <div className='flex items-center gap-5'>
              <img src={creator1} alt="" />
              <div className=''>
                <p className='leading-10'>Lydra</p>
                <div className='flex items-center gap-3'>
                  <img src={eth} alt="" />
                  <p className='text-green'>191.200 ETH</p>
                </div>
              
              </div>
            </div>
            <button type='button' className='bg-[#5BA300] rounded-full px-5 py-2'>+ Follow</button>
          </div>

          <div className='bg-secondary rounded-xl m-2 flex items-center justify-between px-4 py-4'>
            <div className='flex items-center gap-5'>
              <img src={creator2} alt="" />
              <div className=''>
                <p className='leading-10'>ClipGuy21</p>
                <div className='flex items-center gap-3'>
                  <img src={eth} alt="" />
                  <p className='text-green'>191.200 ETH</p>
                </div>
              
              </div>
            </div>
            <button type='button' className='bg-[#5BA300] rounded-full px-5 py-2'>+ Follow</button>
          </div>

          <div className='bg-secondary rounded-xl m-2 flex items-center justify-between px-4 py-4'>
            <div className='flex items-center gap-5'>
              <img src={creator3} alt="" />
              <div className=''>
                <p className='leading-10'>Bejo</p>
                <div className='flex items-center gap-3'>
                  <img src={eth} alt="" />
                  <p className='text-green'>191.200 ETH</p>
                </div>
              
              </div>
            </div>
            <button type='button' className='bg-[#5BA300] rounded-full px-5 py-2'>+ Follow</button>
          </div>

          <div className='bg-secondary rounded-xl m-2 flex items-center justify-between px-4 py-4'>
            <div className='flex items-center gap-5'>
              <img src={creator4} alt="" />
              <div className=''>
                <p className='leading-10'>Asep</p>
                <div className='flex items-center gap-3'>
                  <img src={eth} alt="" />
                  <p className='text-green'>191.200 ETH</p>
                </div>
              
              </div>
            </div>
            <button type='button' className='bg-[#5BA300] rounded-full px-5 py-2'>+ Follow</button>
          </div>

          <div className='bg-secondary rounded-xl m-2 flex items-center justify-between px-4 py-4'>
            <div className='flex items-center gap-5'>
              <img src={creator5} alt="" />
              <div className=''>
                <p className='leading-10'>Siti</p>
                <div className='flex items-center gap-3'>
                  <img src={eth} alt="" />
                  <p className='text-green'>191.200 ETH</p>
                </div>
              
              </div>
            </div>
            <button type='button' className='bg-[#5BA300] rounded-full px-5 py-2'>+ Follow</button>
          </div>

          <div className='bg-secondary rounded-xl m-2 flex items-center justify-between px-4 py-4'>
            <div className='flex items-center gap-5'>
              <img src={creator6} alt="" />
              <div className=''>
                <p className='leading-10'>Bayu</p>
                <div className='flex items-center gap-3'>
                  <img src={eth} alt="" />
                  <p className='text-green'>191.200 ETH</p>
                </div>
              
              </div>
            </div>
            <button type='button' className='bg-[#5BA300] rounded-full px-5 py-2'>+ Follow</button>
          </div>

          <div className='bg-secondary rounded-xl m-2 flex items-center justify-between px-4 py-4'>
            <div className='flex items-center gap-5'>
              <img src={creator1} alt="" />
              <div className=''>
                <p className='leading-10'>Lydra</p>
                <div className='flex items-center gap-3'>
                  <img src={eth} alt="" />
                  <p className='text-green'>191.200 ETH</p>
                </div>
              
              </div>
            </div>
            <button type='button' className='bg-[#5BA300] rounded-full px-5 py-2'>+ Follow</button>
          </div>

          <div className='bg-secondary rounded-xl m-2 flex items-center justify-between px-4 py-4'>
            <div className='flex items-center gap-5'>
              <img src={creator1} alt="" />
              <div className=''>
                <p className='leading-10'>Lydra</p>
                <div className='flex items-center gap-3'>
                  <img src={eth} alt="" />
                  <p className='text-green'>191.200 ETH</p>
                </div>
              
              </div>
            </div>
            <button type='button' className='bg-[#5BA300] rounded-full px-5 py-2'>+ Follow</button>
          </div>

          <div className='bg-secondary rounded-xl m-2 flex items-center justify-between px-4 py-4'>
            <div className='flex items-center gap-5'>
              <img src={creator1} alt="" />
              <div className=''>
                <p className='leading-10'>Lydra</p>
                <div className='flex items-center gap-3'>
                  <img src={eth} alt="" />
                  <p className='text-green'>191.200 ETH</p>
                </div>
              
              </div>
            </div>
            <button type='button' className='bg-[#5BA300] rounded-full px-5 py-2'>+ Follow</button>
          </div>



        </div>
        <div className='flex justify-center items-center py-4'>
          <button className='border border-green rounded-xl text-green px-6 py-3'>View Rangking</button>
        </div>
      </div>
    </section>
  )
}

export default Creator