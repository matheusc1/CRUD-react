import { User, Package } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import authServices from '../services/OtherServices'
import { HomeRoot } from '../components/PagesRoot'
import PageHeader from '../components/PageHeader'
import Counter from '../components/Counter'
import { useState, useEffect } from 'react'
import { getClients, getProducts } from '../services/ApiServices'

export default function Home() {
  const navigate = useNavigate()

  function handleLogout() {
    authServices.logout(navigate)
  }

  const [clientList, setClientList] = useState([])
  const [productList, setProductList] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const clientList = await getClients()
        const productList = await getProducts()
        setClientList(clientList)
        setProductList(productList)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (  
    <HomeRoot>
      <PageHeader />
      <div className="flex flex-col items-start px-6 mt-10 gap-6">
        <Counter 
          text="Total de clientes"
          total={clientList.length}
          icon={User}
        />
        <Counter 
          text="Total de produtos"
          total={productList.length}
          icon={Package}
        />
      </div>

      <div className="flex flex-col items-start gap-3 mt-8 px-6">
        <Link 
          to="/clients"
          className="text-zinc-700 hover:text-zinc-400 dark:text-zinc-300 dark:hover:text-zinc-500"
        >
          Ir para clientes
        </Link>

        <Link 
          to="/products"
          className="text-zinc-700 hover:text-zinc-400 dark:text-zinc-300 dark:hover:text-zinc-500"
        >
          Ir para produtos
        </Link>

        <button 
          onClick={handleLogout} 
          className="text-zinc-700 hover:text-zinc-400 dark:text-zinc-300 dark:hover:text-zinc-500"
        >
          Sair
        </button>
      </div>
    </HomeRoot>
  )
}