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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='products' element={<Products />}/>
      <Route path='clients' element={<Clients />}/>
    </>
  )
)

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}