import DeleteDialog from '@/components/DeleteDialog'
import EditModal from '@/components/EditModal'

import { Calendar, MapPin, Star, Clock3, Edit } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params

  const res = await fetch(`http://localhost:5000/single/${id}`, {
    cache: 'no-store',
  })

  const destionationData = await res.json()

  return (
    <div className="min-h-screen bg-gray-100 pb-10">
    <div className='flex justify-end items-center px-4 py-2'>
      <EditModal destinationda={destionationData}/>
     <DeleteDialog destinationda={destionationData}/>
    </div>
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden">

        <Image
          src={destionationData.imageUrl}
          alt={destionationData.destinationName}
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="absolute bottom-10 left-1/2 w-full max-w-7xl -translate-x-1/2 px-6 text-white">

          <div className="flex items-center gap-2 mb-3">
            <MapPin className="text-orange-400" size={18} />
            <span className="text-lg font-medium">
              {destionationData.country}
            </span>
          </div>

          <h1 className="text-5xl font-extrabold leading-tight max-w-3xl">
            {destionationData.destinationName}
          </h1>

          <div className="flex items-center gap-6 mt-5 text-sm">

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <Calendar size={16} />
              <span>{destionationData.duration}</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span>4.9 Rating</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <Clock3 size={16} />
              <span>Best Time Anytime</span>
            </div>

          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 mt-10">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Side */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold text-gray-800 mb-5">
                About Destination
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                {destionationData.description}
              </p>

            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src={destionationData.imageUrl}
                  alt="gallery"
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src={destionationData.imageUrl}
                  alt="gallery"
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>

            </div>

          </div>

          {/* Right Side Card */}
          <div>

            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-5">

              <div className="flex items-center justify-between mb-6">

                <div>
                  <p className="text-gray-500 text-sm">Starting From</p>

                  <h1 className="text-4xl font-extrabold text-orange-500">
                    ${destionationData.price}
                  </h1>
                </div>

                <div className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
                  Popular
                </div>

              </div>

              <button className="w-full bg-black hover:bg-orange-500 transition duration-300 text-white py-4 rounded-2xl text-lg font-semibold">
                Book Now
              </button>

              <div className="mt-6 space-y-4">

                <div className="flex items-center justify-between text-gray-600">
                  <span>Duration</span>
                  <span className="font-semibold">
                    {destionationData.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-600">
                  <span>Country</span>
                  <span className="font-semibold">
                    {destionationData.country}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-600">
                  <span>Availability</span>
                  <span className="text-green-500 font-semibold">
                    Available
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default DestinationDetailsPage