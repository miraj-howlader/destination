import Image from 'next/image'
import React from 'react'
import { Calendar, MapPin } from 'lucide-react'
import { Button } from '@heroui/react'
import Link from 'next/link'

const Destinationcard = ({ destination }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white">

      {/* Image */}
      <div className="relative w-full h-56">
        <Image
          src={destination.imageUrl}
          alt={destination.destinationName}
          fill
          className="object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <MapPin size={16} />
          <span>{destination.country}</span>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold text-gray-800 leading-tight">
          {destination.destinationName}
        </h1>

        {/* Duration */}
       <div className='flex justify-between'>
         <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Calendar size={16} />
          <span>{destination.duration}</span>
        </div>
        <div>
            <p className='text-xl'>${destination.price}</p>
        </div>
       </div>
       <Link href={`/destination/${destination._id}`}>
       <Button>Book Now</Button>
       </Link>
      </div>
      
    </div>
  )
}

export default Destinationcard