import api from './api'

export default async function authenticate(email, senha) {
  try {
    const response = await api.post('/login', {email, senha})
    return response.data
  } catch (error) {
    console.log(error)
  }
}