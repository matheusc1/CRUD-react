import React from 'react'
import { AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '../AlertDialog'

interface ClientDialogFooterProps {
  variant: string
  onCancel: () => void
  onSave: () => void
}

export default function ClientDialogFooter({ variant, onCancel, onSave }: ClientDialogFooterProps) {
  return (
    <AlertDialogFooter>
      <AlertDialogCancel
        type="button"
        className={`alert-dialog-cancel-${variant}`}
        onClick={() => onCancel()}
      >
        Cancelar
      </AlertDialogCancel>
      <AlertDialogAction
        type="button"
        onClick={() => onSave()}
      >
        Salvar
      </AlertDialogAction>
    </AlertDialogFooter>
  )
}