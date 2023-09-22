import React, { ElementType } from "react"
import { AlertDialogTrigger } from '../AlertDialog'
import { Button } from '../Button'

interface DialogTriggerProps {
  icon: ElementType
  text?: string
}

export default function DialogTrigger({ icon: Icon, text }: DialogTriggerProps) {
  return (
    <AlertDialogTrigger asChild>
      <Button>
        <Icon className='mr-2 h-4 w-4' /> {text}
      </Button>
    </AlertDialogTrigger>
  )
}