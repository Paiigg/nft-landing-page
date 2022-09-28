import React from 'react'
import {FiArrowRight,FiHeart} from 'react-icons/fi'
import { eth, nft4, nft5, nft6, profile } from '../data'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";




const Editor = (   ) => {
  return (
    <section className='bg-primary text-white'>
      <div className='max-w-[1240px] mx-auto px-4 py-10'>
        <div className='flex justify-between items-center pb-10'>
          <div className=''>
            <h2 className='text-2xl font-semibold'>Editor's Pick</h2>
          </div>
          <div className='flex justify-center items-center gap-5'>
            <p>View All</p>
            <FiArrowRight/>
          </div>
        </div>
         <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='bg-secondary  px-10 rounded-xl py-[34px]'>
                <div className='flex justify-between items-center pb-5 '>
                  <div className='flex  items-center gap-5'>
                    <img src={profile} alt="" />
                    <p>Mark Ross</p>

                  </div>
                  <FiHeart/>
                </div>
                <img src={nft4} alt="nft1" className='mx-auto' />
                <div className='py-6'>
                  <p className='text-lg font-semibold'>Old Man Paul</p>
                  <p className='text-xs text-slate-400'>Edition 1 of 5</p>
                </div>

                <div className='flex items-start md:items-center gap-5 flex-col md:flex-row justify-between '>
                  <div className='flex items-center gap-5'>
                    <img src={eth} alt="etherium" />
                    <div>
                      <p className='text-xs text-slate-400'>Price</p>
                      <p className='text-lg font-semibold'>1.5 ETH</p>
                    </div>

                  </div>
                  <button type='button' className='bg-[#5BA300] w-full md:w-auto px-9 py-3'>Place a bid</button>
                </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-secondary px-10 rounded-xl py-[34px]'>
                <div className='flex justify-between items-center pb-5 '>
                  <div className='flex  items-center gap-5'>
                    <img src={profile} alt="" />
                    <p>Mark Ross</p>

                  </div>
                  <FiHeart/>
                </div>
                <img src={nft5} alt="nft1" className='mx-auto' />
                <div className='py-6'>
                  <p className='text-lg font-semibold'>Hand Of God</p>
                  <p className='text-xs text-slate-400'>Edition 1 of 5</p>
                </div>

                <div className='flex items-start md:items-center gap-5 flex-col md:flex-row justify-between '>
                  <div className='flex items-center gap-5'>
                    <img src={eth} alt="etherium" />
                    <div>
                      <p className='text-xs text-slate-400'>Price</p>
                      <p className='text-lg font-semibold'>1.5 ETH</p>
                    </div>

                  </div>
                  <button type='button' className='bg-[#5BA300]  w-full md:w-auto px-9 py-3'>Place a bid</button>
                </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-secondary  px-10 rounded-xl py-[34px]'>
                <div className='flex justify-between items-center pb-5 '>
                  <div className='flex  items-center gap-5'>
                    <img src={profile} alt="" />
                    <p>Mark Ross</p>

                  </div>
                  <FiHeart/>
                </div>
                <img src={nft6} alt="nft1" className='mx-auto' />
                <div className='py-6'>
                  <p className='text-lg font-semibold'>Silver Age Astronaut</p>
                  <p className='text-xs text-slate-400'>Edition 1 of 5</p>
                </div>

                <div className='flex items-start md:items-center gap-5 flex-col md:flex-row justify-between '>
                  <div className='flex items-center gap-5'>
                    <img src={eth} alt="etherium" />
                    <div>
                      <p className='text-xs text-slate-400'>Price</p>
                      <p className='text-lg font-semibold'>1.5 ETH</p>
                    </div>

                  </div>
                  <button type='button' className='bg-[#5BA300]  w-full md:w-auto px-9 py-3'>Place a bid</button>
                </div>

          </div>
        </SwiperSlide>
        
      </Swiper>

    
       
              
            

          
       

      </div>

    </section>
  )
}

export default Editor