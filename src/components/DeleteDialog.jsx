"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash2, AlertTriangle } from "lucide-react";
import { redirect } from "next/navigation";

const DeleteDialog = ({destinationda}) => {

    const handleDete = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/delete/${destinationda._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    redirect('/destination')
    
    }
  return (
    <AlertDialog>
      {/* Trigger Button */}
      <Button
        variant="danger"
        className="group rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 px-6 py-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-red-500/30"
      >
        <Trash2
          size={18}
          className="transition-transform duration-300 group-hover:rotate-12"
        />
        Delete Destination
      </Button>

      {/* Backdrop */}
      <AlertDialog.Backdrop className="bg-black/40 backdrop-blur-sm">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:max-w-[480px]">
            <AlertDialog.CloseTrigger className="top-5 right-5 rounded-full bg-gray-100 p-2 transition hover:bg-gray-200" />

            {/* Header */}
            <AlertDialog.Header className="flex flex-col items-center border-b border-gray-100 bg-gradient-to-br from-red-500 to-rose-600 px-8 py-10 text-center text-white">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                <AlertTriangle size={42} />
              </div>

              <AlertDialog.Heading className="text-3xl font-bold tracking-tight">
                Delete Destination?
              </AlertDialog.Heading>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
                This action will permanently remove this travel destination
                and all related information from your database.
              </p>
            </AlertDialog.Header>

            {/* Body */}
            <AlertDialog.Body className="px-8 py-8">
              <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
                <p className="text-sm leading-7 text-gray-700">
                  You are about to delete{" "}
                  <span className="font-bold text-red-600">
                    {destinationda.destinationName}
                  </span>
                  . This action cannot be undone and the data will be lost
                  permanently.
                </p>
              </div>
            </AlertDialog.Body>

            {/* Footer */}
            <AlertDialog.Footer className="flex gap-4 border-t border-gray-100 bg-gray-50 px-8 py-6">
              <Button
                slot="close"
                variant="secondary"
                className="h-12 flex-1 rounded-2xl border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:bg-gray-100"
              >
                Cancel
              </Button>

              <Button
              onClick={handleDete}
                slot="close"
                variant="danger"
                className="h-12 flex-1 rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-red-500/30"
              >
                <Trash2 size={16} />
                Delete Now
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteDialog;