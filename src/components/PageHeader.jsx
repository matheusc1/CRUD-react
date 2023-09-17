import { ModeToggle } from './ModeToggle'
import authServices from '../services/OtherServices'

export default function PageHeader() {
  const { nome } = JSON.parse(authServices.getUser())

  return (
    <div className="flex items-center justify-between px-4 mt-2">
      <p className="text-zinc-700 dark:text-zinc-300">Olá {nome}, 👋🏼</p>
      <ModeToggle />
    </div>
  )
}