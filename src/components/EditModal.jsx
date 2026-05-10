"use client";

import {
  Button,
  FieldError,
  Select,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import {
  Edit,
  MapPin,
  CalendarDays,
  DollarSign,
  Globe,
  Sparkles,
  Trash2,
} from "lucide-react";

const EditModal = ({destinationda}) => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    console.log(destination)

    const res = await fetch(`http://localhost:5000/update/${destinationda._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(destination),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <Modal>
      {/* Trigger Button */}
      <div className="flex justify-end">
        <Button
          className="my-4 mr-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
        >
          <Edit size={18} />
          Edit Destination
        </Button>

    
      </div>

      <Modal.Backdrop className="backdrop-blur-sm bg-black/40">
        <Modal.Container placement="center">
          <Modal.Dialog className="max-h-[95vh] overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-2xl sm:max-w-3xl">
            <Modal.CloseTrigger className="top-5 right-5 rounded-full bg-gray-100 p-2 hover:bg-gray-200" />

            {/* Header */}
            <Modal.Header className="border-b border-gray-100 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 p-8 text-white">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                  <Sparkles size={28} />
                </div>

                <div>
                  <Modal.Heading className="text-3xl font-bold tracking-tight">
                    Edit Travel Destination
                  </Modal.Heading>

                  <p className="mt-2 max-w-xl text-sm text-white/80">
                    Update your travel package details with a modern and
                    beautiful interface.
                  </p>
                </div>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="overflow-y-auto bg-gradient-to-b from-slate-50 to-white p-0">
              <Surface
                variant="default"
                className="rounded-none border-none bg-transparent shadow-none"
              >
                <form
                  onSubmit={onSubmit}
                  className="space-y-8 p-8"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Destination */}
                    <div className="md:col-span-2">
                      <TextField name="destinationName" isRequired defaultValue={destinationda.destinationName}>
                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                          Destination Name
                        </Label>

                        <div className="relative">
                          <MapPin
                            size={18}
                            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-cyan-500"
                          />

                          <Input
                            placeholder="Bali Paradise"
                            className="rounded-2xl border border-gray-200 bg-white py-3 pl-12 shadow-sm transition-all duration-300 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-200"
                          />
                        </div>

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField name="country" isRequired defaultValue={destinationda.country}>
                      <Label className="mb-2 text-sm font-semibold text-gray-700">
                        Country
                      </Label>

                      <div className="relative">
                        <Globe
                          size={18}
                          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-blue-500"
                        />

                        <Input
                          placeholder="Indonesia"
                          className="rounded-2xl border border-gray-200 bg-white py-3 pl-12 shadow-sm transition-all duration-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200"
                        />
                      </div>

                      <FieldError />
                    </TextField>

                    {/* Category */}
                    <div>
                      <Label className="mb-2 text-sm font-semibold text-gray-700">
                        Category
                      </Label>

                      <Select
                      defaultValue={destinationda.category}
                        name="category"
                        isRequired
                        className="w-full"
                        placeholder="Select category"
                      >
                        <Select.Trigger className="rounded-2xl border border-gray-200 bg-white py-3 shadow-sm transition-all duration-300 hover:border-cyan-400 focus:ring-2 focus:ring-cyan-200">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            {[
                              "Beach",
                              "Mountain",
                              "City",
                              "Adventure",
                              "Cultural",
                              "Luxury",
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
                    <TextField name="price" type="number" isRequired defaultValue={destinationda.price}>
                      <Label className="mb-2 text-sm font-semibold text-gray-700">
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
                          className="rounded-2xl border border-gray-200 bg-white py-3 pl-12 shadow-sm transition-all duration-300 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-200"
                        />
                      </div>

                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField name="duration" isRequired defaultValue={destinationda.duration}>
                      <Label className="mb-2 text-sm font-semibold text-gray-700">
                        Duration
                      </Label>

                      <Input
                        placeholder="7 Days / 6 Nights"
                        className="rounded-2xl border border-gray-200 bg-white py-3 shadow-sm transition-all duration-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200"
                      />

                      <FieldError />
                    </TextField>

                    {/* Date */}
                    <TextField
                    defaultValue={destinationda.departureDate}
                      name="departureDate"
                      type="date"
                      isRequired
                    >
                      <Label className="mb-2 text-sm font-semibold text-gray-700">
                        Departure Date
                      </Label>

                      <div className="relative">
                        <CalendarDays
                          size={18}
                          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-pink-500"
                        />

                        <Input
                          type="date"
                          className="rounded-2xl border border-gray-200 bg-white py-3 pl-12 shadow-sm transition-all duration-300 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-200"
                        />
                      </div>

                      <FieldError />
                    </TextField>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                      <TextField name="imageUrl" isRequired defaultValue={destinationda.imageUrl}>
                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                          Image URL
                        </Label>

                        <Input
                          type="url"
                          placeholder="https://example.com/image.jpg"
                          className="rounded-2xl border border-gray-200 bg-white py-3 shadow-sm transition-all duration-300 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-200"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField name="description" isRequired defaultValue={destinationda.description}>
                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                          Description
                        </Label>

                        <TextArea
                          placeholder="Describe the travel experience..."
                          className="min-h-[140px] rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-200"
                        />

                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* Footer Buttons */}
                  <div className="flex flex-col-reverse gap-4 pt-4 sm:flex-row sm:justify-end">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="rounded-2xl px-6 py-6"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-6 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/30"
                    >
                      Save Changes
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;