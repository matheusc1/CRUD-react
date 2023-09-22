import { Navigate } from 'react-router-dom'
import authServices from '../services/OtherServices'

export default function AuthenticatedRoute({ children }) {
  const token = authServices.getToken()

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return children
}