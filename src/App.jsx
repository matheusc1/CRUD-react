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
import AuthenticatedRoute from './components/AuthenticatedRoutes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<AuthenticatedRoute><Sidebar/></AuthenticatedRoute> } >
        <Route index element={<AuthenticatedRoute><Home /></AuthenticatedRoute>} />
        <Route path='products' element={<AuthenticatedRoute><Products /></AuthenticatedRoute>} />
        <Route path='clients' element={<AuthenticatedRoute><Clients /></AuthenticatedRoute>} />
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