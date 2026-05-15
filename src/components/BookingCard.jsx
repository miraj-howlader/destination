'use client'
import { authClient } from '@/lib/auth-client'
import { DateField, Label } from '@heroui/react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const BookingCard = ({destionationData}) => {
  const {data:session} =authClient.useSession()
  const user = session?.user
  const [date,setDate]=useState(null)
  const {destinationName,price,imageUrl,country}=destionationData


  const handleBooking = async ()=>{
    const bookingData = {userId:user.id,imageImage:user.image,userName:user.name,destinationId:destionationData._id,
      destinationName,price,imageUrl,country,date: new Date(date)
    }
    const {data:tokenData} = await authClient.token()
    console.log(tokenData)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        authorization: `Bearer ${tokenData?.token}`
      },
      body:JSON.stringify(bookingData)
    })
    const data = await res.json()
    if(data){
      toast.success('Booking successfully')
    }
  }



  return (
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

              <DateField className="w-[256px] mt-2 border" name="date" onChange={setDate} >
            <Label>Date</Label>
            <DateField.Group>
            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
            </DateField.Group>
           </DateField>
 
              <button onClick={handleBooking} className="w-full bg-black mt-8 hover:bg-orange-500 transition duration-300 text-white py-4 rounded-2xl text-lg font-semibold">
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
  )
}

export default BookingCard