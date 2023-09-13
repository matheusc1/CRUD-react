import React, { ElementType } from 'react'

interface CounterProps {
  text: string
  total: number
  icon: ElementType
}

export default function Counter({ text, total, icon: Icon }: CounterProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="flex bg-zinc-400 dark:bg-zinc-500 h-14 w-14 rounded-full justify-center items-center">
        <Icon className="text-zinc-100 w-7 h-7" />
      </div>

      <div className="flex items-center justify-center flex-col">
        <p className="text-zinc-600 dark:text-zinc-400">{text}</p>
        <span className="text-zinc-900 dark:text-zinc-100 font-semibold">{total}</span>
      </div>
    </div>
  )
}