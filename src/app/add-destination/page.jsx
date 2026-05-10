'use client'

import {
  Button,
  FieldError,
  Select,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Card,
} from '@heroui/react'

import {
  MapPin,
  Globe,
  CalendarDays,
  DollarSign,
  Sparkles,
  ImageIcon,
  Clock3,
} from 'lucide-react'
import { redirect } from 'next/navigation'

import React from 'react'

const AddDestinationpage = () => {
  const onSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const destination = Object.fromEntries(formData.entries())

    const res = await fetch('http://localhost:5000/destination', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(destination),
    })

    const data = await res.json()
    redirect('/destination')
    
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-100 p-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-black tracking-tight text-gray-900">
              Add Destination
            </h1>

            <p className="mt-3 text-lg text-gray-500">
              Create beautiful travel destinations for your travelers.
            </p>
          </div>

          <div className="hidden md:flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-2xl">
            <Sparkles size={38} />
          </div>
        </div>

        {/* Card */}
        <Card className="overflow-hidden rounded-[35px] border border-white/40 bg-white/80 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 px-10 py-8 text-white">
            <h2 className="text-3xl font-bold">
              Travel Information
            </h2>

            <p className="mt-2 text-white/80">
              Fill in destination details to create a premium travel package.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="space-y-8 p-10"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField name="destinationName" isRequired>
                  <Label className="mb-3 text-sm font-semibold text-gray-700">
                    Destination Name
                  </Label>

                  <div className="relative">
                    <MapPin
                      size={18}
                      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-cyan-500"
                    />

                    <Input
                      placeholder="Bali Paradise"
                      className="rounded-2xl border border-gray-200 bg-white py-4 pl-12 shadow-sm transition-all duration-300 focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100"
                    />
                  </div>

                  <FieldError />
                </TextField>
              </div>

              {/* Country */}
              <TextField name="country" isRequired>
                <Label className="mb-3 text-sm font-semibold text-gray-700">
                  Country
                </Label>

                <div className="relative">
                  <Globe
                    size={18}
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-blue-500"
                  />

                  <Input
                    placeholder="Indonesia"
                    className="rounded-2xl border border-gray-200 bg-white py-4 pl-12 shadow-sm transition-all duration-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
                  />
                </div>

                <FieldError />
              </TextField>

              {/* Category */}
              <div>
                <Label className="mb-3 text-sm font-semibold text-gray-700">
                  Category
                </Label>

                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Select.Trigger className="rounded-2xl border border-gray-200 bg-white py-4 shadow-sm transition-all duration-300 hover:border-cyan-400 focus:ring-4 focus:ring-cyan-100">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      {[
                        'Beach',
                        'Mountain',
                        'City',
                        'Adventure',
                        'Cultural',
                        'Luxury',
                      ].map((item) => (
                        <ListBox.Item
                          key={item}
                          id={item}
                          textValue={item}
                        >
                          {item}
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
              <TextField name="price" type="number" isRequired>
                <Label className="mb-3 text-sm font-semibold text-gray-700">
                  Price (USD)
                </Label>

                <div className="relative">
                  <DollarSign
                    size={18}
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-emerald-500"
                  />

                  <Input
                    type="number"
                    placeholder="1299"
                    className="rounded-2xl border border-gray-200 bg-white py-4 pl-12 shadow-sm transition-all duration-300 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-100"
                  />
                </div>

                <FieldError />
              </TextField>

              {/* Duration */}
              <TextField name="duration" isRequired>
                <Label className="mb-3 text-sm font-semibold text-gray-700">
                  Duration
                </Label>

                <div className="relative">
                  <Clock3
                    size={18}
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-orange-500"
                  />

                  <Input
                    placeholder="7 Days / 6 Nights"
                    className="rounded-2xl border border-gray-200 bg-white py-4 pl-12 shadow-sm transition-all duration-300 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100"
                  />
                </div>

                <FieldError />
              </TextField>

              {/* Departure Date */}
              <TextField
                name="departureDate"
                type="date"
                isRequired
              >
                <Label className="mb-3 text-sm font-semibold text-gray-700">
                  Departure Date
                </Label>

                <div className="relative">
                  <CalendarDays
                    size={18}
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-pink-500"
                  />

                  <Input
                    type="date"
                    className="rounded-2xl border border-gray-200 bg-white py-4 pl-12 shadow-sm transition-all duration-300 focus-within:border-pink-500 focus-within:ring-4 focus-within:ring-pink-100"
                  />
                </div>

                <FieldError />
              </TextField>

              {/* Image URL */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label className="mb-3 text-sm font-semibold text-gray-700">
                    Image URL
                  </Label>

                  <div className="relative">
                    <ImageIcon
                      size={18}
                      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-violet-500"
                    />

                    <Input
                      type="url"
                      placeholder="https://example.com/bali.jpg"
                      className="rounded-2xl border border-gray-200 bg-white py-4 pl-12 shadow-sm transition-all duration-300 focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100"
                    />
                  </div>

                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label className="mb-3 text-sm font-semibold text-gray-700">
                    Description
                  </Label>

                  <TextArea
                    placeholder="Describe the travel experience..."
                    className="min-h-[160px] rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100"
                  />

                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Button */}
            <Button
              type="submit"
              className="h-16 w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-cyan-500/30"
            >
              ✈️ Create Travel Destination
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default AddDestinationpage