import React from 'react'
import { ModeToggle } from './ModeToggle'

export default function PageHeader() {
  return (
    <div className="flex items-center justify-between px-4 mt-2">
      <p className="text-zinc-700 dark:text-zinc-300">Olá Username, 👋🏼</p>
      <ModeToggle />
    </div>
  )
}