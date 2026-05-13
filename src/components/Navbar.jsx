'use client'

import Link from 'next/link'
import React from 'react'
import { Compass, Menu, User } from 'lucide-react'

import { usePathname } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { Avatar, Button } from '@heroui/react'


const Navbar = () => {
  const pathname = usePathname()

  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Destinations',
      path: '/destination',
    },
    {
      name: 'My Booking',
      path: '/mybooking',
    },
    {
      name: 'Add Destination',
      path: '/add-destination',
    },
  ]
  const {data:session} =authClient.useSession()
  const user = session?.user

  const handleLogout =async ()=>{
    await authClient.signOut()
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">

            <div className="bg-black p-2 rounded-2xl">
              <Compass className="text-white" size={22} />
            </div>

            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">
                Wanderlust
              </h1>

              <p className="text-xs text-gray-500 -mt-1">
                Explore the world
              </p>
            </div>

          </Link>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium">

            {navLinks.map((link) => (
              <li key={link.path} className="relative">

                <Link
                  href={link.path}
                  className={`transition duration-300 pb-1 ${
                    pathname === link.path
                      ? 'text-orange-500'
                      : 'text-gray-700 hover:text-orange-500'
                  }`}
                >
                  {link.name}
                </Link>

                {/* Active Underline */}
                {pathname === link.path && (
                  <span className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-orange-500"></span>
                )}

              </li>
            ))}

          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Profile */}
            <Link
              href="/profile"
              className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white transition duration-300"
            >
              <User size={18} />
            </Link>

           
            {
              user ?  <>
              <Avatar>
            <Avatar.Image alt="John Doe" src={user?.image} />
            <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
           </Avatar>
           <Button variant='danger' onClick={handleLogout}>Logout</Button>
              </> : <>
          <Link
              href="/login"
              className="hidden md:flex px-5 py-2.5 rounded-xl border border-gray-300 hover:border-orange-500 hover:text-orange-500 transition duration-300 font-medium"
            >
              Login
            </Link>

           
            <Link
              href="/signup"
              className="px-5 py-2.5 rounded-xl bg-black hover:bg-orange-500 text-white transition duration-300 font-medium shadow-lg"
            >
              Sign Up
            </Link>
         </>
            }

           
            <button className="md:hidden w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
              <Menu size={20} />
            </button>

          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar