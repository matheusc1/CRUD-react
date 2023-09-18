import React from "react"
import { AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from '../AlertDialog'

interface ClientDialogHeaderProps {
  title: string
  desc: string
}

export default function ClientDialogHeader({ title, desc }: ClientDialogHeaderProps) {
  return (
    <AlertDialogHeader>
      <AlertDialogTitle>{title}</AlertDialogTitle>
      <AlertDialogDescription>
        {desc}
      </AlertDialogDescription>
    </AlertDialogHeader>
  )
}