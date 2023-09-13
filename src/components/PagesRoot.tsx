import React, { ReactNode } from "react"

interface PageRootProps {
  children: ReactNode
}

export function HomeRoot({ children }: PageRootProps) {
  return (
    <div className="flex items-center justify-center flex-1 min-h-screen w-full bg-zinc-200 dark:bg-zinc-800 p-8">
      <div className="bg-zinc-50 dark:bg-zinc-950 h-96 w-96 p-3 rounded-xl shadow-xl">
        {children}
      </div>
    </div>
  )
}

export function PageRoot({ children }: PageRootProps) {
  return (
    <div className="flex flex-1 min-h-screen w-full bg-zinc-200 dark:bg-zinc-800 p-8">
      <div className="bg-zinc-50 dark:bg-zinc-950 min-h-full min-w-full p-5 rounded-xl shadow-lg">
        {children}
      </div>
    </div>
  )
}