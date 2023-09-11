import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import Home from './pages/home'
import Clients from './pages/clients'
import Products from './pages/products'
import Login from './pages/login'
import Sidebar from './components/Sidebar'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Sidebar/> } >
        <Route index element={<Home />} />
        <Route path='products' element={<Products />}/>
        <Route path='clients' element={<Clients />}/>
      </Route>

      <Route path='login' element={<Login />} />
    </>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}