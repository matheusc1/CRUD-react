import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import authServices from '../services/OtherServices'

export default function AuthenticatedRoute({ children }) {
  const navigate = useNavigate()

  useEffect(() => {
    authServices.validateUser(navigate)
  }, [navigate])

  return children
}