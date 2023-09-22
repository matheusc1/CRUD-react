import React, { ElementType } from "react"
import { AlertDialogTrigger } from '../AlertDialog'

interface ActionDialogTriggerProps {
  icon: ElementType
  onClick: () => void
}

export default function ActionDialogTrigger({ icon: Icon, onClick }: ActionDialogTriggerProps) {
  return (
    <AlertDialogTrigger asChild>
      <Icon onClick={onClick} className="h-5 w-5 text-blue-600 hover:text-blue-300 dark:text-violet-600 dark:hover:text-violet-300 cursor-pointer" />
    </AlertDialogTrigger>
  )
}