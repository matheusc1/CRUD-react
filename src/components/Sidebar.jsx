import { Waves, Home, User, Package, LogOut } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='overflow-hidden flex'>
      <nav className="bg-zinc-950 min-h-screen w-64  p-4">
        <div className="flex gap-3 justify-center items-center mt-2 mb-20 text-zinc-50">
          <Waves className='h-12 w-12 mt-1' />
          <p className='text-5xl'>CRUD</p>
        </div>

        <ul className='flex flex-col gap-6 text-zinc-100 items-left ml-10 justify-center text-xl'>
            <li className='flex gap-3 items-center hover:text-zinc-300'>
              <Home className='h-5 w-5' /> 
              <Link to='/'>Overview</Link>
            </li>
            <li className='flex gap-3 items-center hover:text-zinc-300'>
              <User className='h-5 w-5' />
              <Link to='/clients'>Clients</Link>
            </li>
            <li className='flex gap-3 items-center hover:text-zinc-300'>
              <Package className='h-5 w-5' />
              <Link to='/products'>Products</Link>
            </li>
        </ul>

        <div className='flex items-center justify-between text-zinc-100 mt-64 px-1'>
          <img className='h-14 w-14 rounded-full' 
            src="https://avatars.githubusercontent.com/matheusc1" 
            alt="user avatar" 
          />

          <div className='flex flex-col items-start gap-1.5'>
            <p className='text-zinc-100 text-base'>Username</p>
            <p className='text-zinc-400 text-sm'>user@email</p>
          </div>
          
          <LogOut className='text-zinc-300 hover:text-zinc-500 cursor-pointer' />
        </div>
      </nav>

      <Outlet />
    </div>
  )
}