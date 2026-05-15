'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowLeft, Home, SearchX } from 'lucide-react'

const NotFoundPage = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-12 text-white">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-cyan-500/30 blur-3xl" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        
        {/* Icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
        >
          <SearchX className="h-14 w-14 text-cyan-400" />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-8xl font-extrabold text-transparent sm:text-9xl"
        >
          404
        </motion.h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl font-bold sm:text-5xl">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
          The page you are looking for might have been removed, renamed,
          or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
          >
            <Home className="h-5 w-5 transition-transform group-hover:rotate-6" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-white/10"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Go Back
          </button>
        </div>

        {/* Small Text */}
        <p className="mt-10 text-sm text-gray-500">
          Error Code: 404 — Lost in Space 🚀
        </p>
      </motion.div>
    </section>
  )
}

export default NotFoundPage