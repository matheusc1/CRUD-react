import { User, Package } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import authServices from '../services/OtherServices'

export default function Home() {
  const navigate = useNavigate()

  function handleLogout() {
    authServices.logout(navigate)
  }

  const clientList = [1, 2, 3]
  const productList = [1, 2]

  return (
    <div className="flex items-center justify-center flex-1 min-h-screen w-full bg-zinc-800 p-8">
      <div className="bg-zinc-950 h-96 w-96 p-3 rounded-xl shadow-xl">
        <div className="flex items-center justify-between px-4 mt-2">
          <p className="text-zinc-300">Olá Username, 👋🏼</p>
          <p className="text-zinc-400">theme</p>
        </div>

        <div className="flex flex-col items-start px-6 mt-10 gap-6">
          <div className="flex items-center justify-center gap-3">
            <div className="flex bg-zinc-500 h-14 w-14 rounded-full justify-center items-center">
              <User className="text-zinc-100 w-7 h-7" />
            </div>

            <div className="flex items-center justify-center flex-col">
              <p className="text-zinc-400">Total de clientes</p>
              <span className="text-zinc-100 font-semibold">{clientList.length}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <div className="flex bg-zinc-500 h-14 w-14 rounded-full justify-center items-center">
              <Package className="text-zinc-100 w-7 h-7" />
            </div>

            <div className="flex items-center justify-center flex-col">
              <p className="text-zinc-400">Total de Produtos</p>
              <span className="text-zinc-100 font-semibold">{productList.length}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 mt-8 px-6">
          <Link to="/clients" className="text-zinc-300 hover:text-zinc-500">
            Ir para clientes
          </Link>

          <Link to="/products" className="text-zinc-300 hover:text-zinc-500">
            Ir para produtos
          </Link>

          <button onClick={handleLogout} className="text-zinc-300 hover:text-zinc-500">
            Sair
          </button>
        </div>
      </div>
    </div>
  )
}