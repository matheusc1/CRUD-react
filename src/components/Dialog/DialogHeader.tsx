import React from "react"
import { AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from '../AlertDialog'

interface DialogHeaderProps {
  title: string
  desc: string
}

export default function DialogHeader({ title, desc }: DialogHeaderProps) {
  return (
    <AlertDialogHeader>
      <AlertDialogTitle>{title}</AlertDialogTitle>
      <AlertDialogDescription>
        {desc}
      </AlertDialogDescription>
    </AlertDialogHeader>
  )
}