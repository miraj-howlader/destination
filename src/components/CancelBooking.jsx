'use client'
import React from 'react'
import {AlertDialog, Button} from "@heroui/react";


const CancelBooking = ({booking}) => {

    const cancelBooking = async ()=>{
        const res =await fetch(`http://localhost:5000/booking/${booking._id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data =await res.json()
        window.location.reload()
    }
  return (
    <div>
         <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={cancelBooking}>
                Delete booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    </div>
  )
}

export default CancelBooking