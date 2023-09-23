import React from "react"
import { Label } from "../Label"
import { Input } from "../Input"
import { Textarea } from "../TextArea";

interface ProductDialogEditProps {
  handleChange: () => void
  nameValue: string
  priceValue: string
  quantityValue: string
  obsValue: string
}

export default function ProductDialogEdit({ handleChange, nameValue, priceValue, quantityValue, obsValue }: ProductDialogEditProps) {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Nome
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
        <Label htmlFor="value" className="text-right">
          Preço
        </Label>
        <Input
          value={priceValue}
          name="value"
          id="value"
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="quantity" className="text-right">
          Estoque
        </Label>
        <Input
          value={quantityValue}
          name="quantity"
          id="quantity"
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="obs" className="text-right">
          Observação
        </Label>
        <Textarea
          value={obsValue}
          name="obs"
          id="obs"
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
    </div>
  )
}