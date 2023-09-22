import { Waves, Home, User, Package, LogOut } from 'lucide-react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import authServices from '../services/OtherServices'

export default function Sidebar() {
  const navigate = useNavigate()
  const { nome, email, foto } = JSON.parse(authServices.getUser())

  function handleLogout() {
    authServices.logout(navigate)
  }

  return (
    <div className='overflow-hidden flex'>
      <nav className="bg-zinc-50 dark:bg-zinc-950 min-h-screen w-64 p-4">
        <div className="flex gap-3 justify-center items-center mt-5 mb-20 dark:text-zinc-50 text-zinc-950">
          <Waves className='h-12 w-12' />
          <p className='text-5xl'>CRUD</p>
        </div>

        <ul className='flex flex-col gap-6 text-zinc-900 dark:text-zinc-100 items-left ml-10 justify-center text-xl'>
            <li className='flex gap-3 items-center hover:text-zinc-400'>
              <Home className='h-5 w-5' /> 
              <Link to='/'>Overview</Link>
            </li>
            <li className='flex gap-3 items-center hover:text-zinc-400'>
              <User className='h-5 w-5' />
              <Link to='/clients'>Clients</Link>
            </li>
            <li className='flex gap-3 items-center hover:text-zinc-400'>
              <Package className='h-5 w-5' />
              <Link to='/products'>Products</Link>
            </li>
        </ul>

        <div className='flex items-center justify-between mt-64 px-1'>
          <img className='h-14 w-14 rounded-full' 
            src={foto}
            alt="user avatar" 
          />

          <div className='flex flex-col items-start gap-1.5'>
            <p className='text-zinc-900 dark:text-zinc-100 text-base'>{nome}</p>
            <p className='text-zinc-600 dark:text-zinc-400 text-sm'>{email}</p>
          </div>
          
            <LogOut 
              onClick={handleLogout} 
              className='text-zinc-700 hover:text-zinc-400 dark:text-zinc-300 dark:hover:text-zinc-500 cursor-pointer'
            />
        </div>
      </nav>

      <Outlet />
    </div>
  )
}