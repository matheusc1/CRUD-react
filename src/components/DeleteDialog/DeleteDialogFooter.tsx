import React from 'react'
import { AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '../AlertDialog'

interface ClientDialogFooterProps {
  onDelete: () => void
}

export default function ClientDialogFooter({ onDelete }: ClientDialogFooterProps) {
  return (
    <AlertDialogFooter>
      <AlertDialogCancel>Cancelar</AlertDialogCancel>
      <AlertDialogAction onClick={() => onDelete()}>Excluir</AlertDialogAction>
    </AlertDialogFooter>
  )
}