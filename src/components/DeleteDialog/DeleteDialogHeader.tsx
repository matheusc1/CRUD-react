import React from "react"
import { AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from '../AlertDialog'

export default function ClientDialogHeader() {
  return (
    <AlertDialogHeader>
      <AlertDialogTitle>Deseja realmente excluir este cliente?</AlertDialogTitle>
      <AlertDialogDescription>
        Essa é uma ação irreversível. Isso vai deletar permanentemente
        este cliente e deletar todos seus dados do servidor.
      </AlertDialogDescription>
    </AlertDialogHeader>
  )
}