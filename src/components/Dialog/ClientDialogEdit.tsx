import React from "react"
import { Label } from '../Label'
import { Input } from "../Input"

interface ClientDialogEditProps {
  handleChange: () => void
  nameValue: string
  numValue: string
  emailValue: string
  cpfValue: string
}

export default function ClientDialogEdit({ handleChange, nameValue, numValue, emailValue, cpfValue }: ClientDialogEditProps) {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input
        value={nameValue}
        name="name"
        id="name"
        onChange={handleChange}
        className="col-span-3"
      />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="phoneNumber" className="text-right">
          Phone Number
        </Label>
        <Input
          value={numValue}
          name="phoneNum"
          id="phoneNumber"
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="email" className="text-right">
          E-mail
        </Label>
        <Input
          value={emailValue}
          name="email"
          id="email"
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="cpf" className="text-right">
          CPF
        </Label>
        <Input
          value={cpfValue}
          name="cpf"
          id="cpf"
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
    </div>
  )
}
