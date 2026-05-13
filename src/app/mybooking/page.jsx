import CancelBooking from '@/components/CancelBooking'
import { auth } from '@/lib/auth'
import { Button } from '@heroui/react'
import { Trash2 } from 'lucide-react'
import { headers } from 'next/headers'
import Image from 'next/image'
import React from 'react'

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
   
    const res = await fetch(`http://localhost:5000/booking/${user?.id}`)
    const bookingData  = await res.json()
    



  return (
    <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl font-bold'>My Bookings</h1>

        <div className=' space-y-5'>
            {
                bookingData.map(booking=><div key={booking._id} className='flex gap-6 border p-5 min-w-3xl'>
                  <Image src={booking.imageUrl} alt={booking.destinationName} height={200} width={200}/>

                  <div>
                    
                    <h1 className=' text-2xl font'>{booking.destinationName}</h1>
                    <p>{new Date(booking.date).toLocaleDateString()}</p>
                    <h1>BookingId: {booking._id}</h1>
                    <p className=' text-xl font-bold'>${booking.price}</p>
                    
                  </div>
                  <CancelBooking booking={booking}/>
                </div>)
            }
        </div>
    </div>
  )
}

export default MyBookingPage