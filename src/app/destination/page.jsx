import Destinationcard from "@/components/Destinationcard"

const Destination =async () => {
   const res  = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/alldestination`)
   const destinationData  = await res.json()
 


  return (
    <div className="">
        <h1 className="text-3xl font-bold items-center justify-center flex mt-4 pb-4 underline"> All Destination</h1>

        <div className=" grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4 px-6 py-3">
            {
             destinationData.map(destination=><Destinationcard key={destination._id} destination={destination}/>)
            }
        </div>
    </div>
  )
}

export default Destination