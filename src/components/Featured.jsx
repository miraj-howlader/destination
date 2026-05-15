import { Button } from '@heroui/react'
import React from 'react'
import Destinationcard from './Destinationcard'
import Link from 'next/link'

const Featured =async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const destinationData = await res.json()
    


  return (
    <div className=' mt-10 max-w-7xl mx-auto'>
      <div className='flex items-center justify-between'>
         <div>
        <h1 className='text-2xl'>Featured Destinations</h1>
        <p className=' text-muted'>Handpicked travel experience for the adventure seekers</p>
       </div>
       <Link href={'/destination'}>
       <Button variant='outline' className=' border-cyan-500 border-2 text-cyan-500'>All Destinations</Button>
       </Link>
      </div>
      <div className=' grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8 mb-9'>
        {
            destinationData.map(destination=><Destinationcard key={destination._id} destination={destination}/>)
        }
      </div>
    </div>
  )
}

export default Featured