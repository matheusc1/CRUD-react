import React, { ElementType } from "react"
import { AlertDialogTrigger } from '../AlertDialog'
import { Button } from '../Button'

interface ClientDialogTriggerProps {
  icon: ElementType
  text?: string
}

export default function ClientDialogTrigger({ icon: Icon, text }: ClientDialogTriggerProps) {
  return (
    <AlertDialogTrigger asChild>
      <Button>
        <Icon className='mr-2 h-4 w-4' /> {text}
      </Button>
    </AlertDialogTrigger>
  )
}