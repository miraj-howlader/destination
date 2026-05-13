'use client'

import { authClient } from '@/lib/auth-client'

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react'

import {
  Eye,
  EyeOff,
  Loader2,
  LockKeyhole,
} from 'lucide-react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { CgGoogle } from 'react-icons/cg'

const LoginPage = () => {

  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)

    const user = Object.fromEntries(
      formData.entries()) 

    try {

      // FIXED: signIn instead of signUp
      const { data, error } = await authClient.signIn.email({
        email: user.email,
        password: user.password,
      })
      console.log(data)

      if (error) {
        setErrorMessage(
          error.message || 'Invalid credentials'
        )
        return
      }

      if (data) {
        router.push('/')
      }

    } catch (error) {

      setErrorMessage(
        'Something went wrong. Please try again.'
      )

    } finally {
      setLoading(false)
    }
  }

  const handleGoogle =async ()=>{
    await authClient.signIn.social({provider:"google"})
  
    }

  return (
    <div className='min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-zinc-900 to-black'>

      <Card className='w-full max-w-md p-8 rounded-3xl shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl'>

        {/* Header */}
        <div className='text-center mb-8'>

          <div className='w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4'>
            <LockKeyhole className='text-black' size={30} />
          </div>

          <h1 className='text-3xl font-bold text-white'>
            Welcome Back
          </h1>

          <p className='text-gray-400 mt-2'>
            Login to continue your journey
          </p>

        </div>

        {/* Form */}
        <Form
          className='flex flex-col gap-5'
          onSubmit={onSubmit}
        >

          {/* Email */}
          <TextField
            isRequired
            name='email'
            type='email'
            validate={(value) => {

              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return 'Please enter a valid email'
              }

              return null
            }}
          >

            <Label className='text-gray-300'>
              Email
            </Label>

            <Input
              placeholder='john@example.com'
              className='mt-1'
            />

            <FieldError />

          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name='password'
            type={showPassword ? 'text' : 'password'}
            validate={(value) => {

              if (value.length < 8) {
                return 'Password must be at least 8 characters'
              }

              return null
            }}
          >

            <Label className='text-gray-300'>
              Password
            </Label>

            <div className='relative w-full mt-1'>

              <Input
                placeholder='Enter your password'
              />

              <button
                type='button'
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'
              >

                {
                  showPassword
                    ? <EyeOff size={18} />
                    : <Eye size={18} />
                }

              </button>

            </div>

            <Description className='text-xs text-gray-500'>
              Enter your secure password
            </Description>

            <FieldError />

          </TextField>

          {/* Error Message */}
          {
            errorMessage && (
              <p className='text-sm text-red-500'>
                {errorMessage}
              </p>
            )
          }

          {/* Login Button */}
          <Button
            type='submit'
            className='w-full h-12 mt-3 text-base font-semibold'
            isDisabled={loading}
          >

            {
              loading ? (
                <>
                  <Loader2
                    className='animate-spin'
                    size={18}
                  />
                  Logging in...
                </>
              ) : (
                'Login'
              )
            }

          </Button>

          {/* Footer */}
          <p className='text-center text-sm text-gray-400 mt-2'>

            Don&apos;t have an account?{' '}

            <Link
              href='/signup'
              className='text-white font-medium hover:underline'
            >
              Sign Up
            </Link>

          </p>

        </Form>

         <div>
            <Button onClick={handleGoogle} className={'w-full mt-4 h-12 text-base font-semibold'}><CgGoogle/> Continue With Google </Button>
        </div>
        

      </Card>
    </div>
  )
}

export default LoginPage