import React from "react"
import { Label } from '../Label'
import { Input } from "../Input"

interface ClientDialogBodyProps {
  handleChange: () => void
}

export default function ClientDialogBody({ handleChange }: ClientDialogBodyProps) {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input
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
          name="cpf"
          id="cpf"
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
    </div>
  )
}
