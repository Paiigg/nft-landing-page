import React from 'react'
import {FaDiscord} from 'react-icons/fa'
import { CommunityImg } from '../data'

const Community = () => {
  return (
    <section className='bg-primary text-white'>
      <div className='max-w-[1240px] mx-auto px-4 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-6xl font-semibold'>Join Our</h2>
            <h2 className='text-6xl text-green font-semibold'> Community</h2>
            <p>Meet the Aking Community, asrtist and collectors for platform update, announcement and more ...</p>
            <button type='button' className='bg-green px-6 w-full md:w-[200px] flex items-center gap-2 py-3'>
              <FaDiscord size={20}/>
              Launch Discord
            </button>
          </div>
          <img src={CommunityImg} alt="" className='mt-5' />

        </div>

      </div>
    </section>
  )
}

export default Community