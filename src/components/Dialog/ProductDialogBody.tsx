import React from "react"
import { Label } from "../Label"
import { Input } from "../Input"
import { Textarea } from "../TextArea"

interface ProductDialogBodyProps {
  handleChange: () => void
}

export default function ProductDialogBody({ handleChange }: ProductDialogBodyProps) {
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
        <Label htmlFor="value" className="text-right">
          Value
        </Label>
        <Input
          name="value"
          id="value"
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="quantity" className="text-right">
          Quantity
        </Label>
        <Input
          name="quantity"
          id="quantity"
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="obs" className="text-right">
          Observation
        </Label>
        <Textarea
          name="obs"
          id="obs"
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
    </div>
  )
}