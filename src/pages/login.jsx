import { useState } from 'react'
import { authenticate } from '../services/ApiServices'
import authServices from '../services/OtherServices'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleLogin(email, password) {
    if (!email || !password) {
      setError("Email e senha são obrigatórios!")
      return
    }

    try {
      const response = await authenticate(email, password)
      authServices.saveToken(response.token)
      authServices.saveUser(response.usuario)
      navigate('/')
    } catch (error) {
      if(error) {
        setError('Email ou senha inválidos')
      }
    }
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-screen w-full bg-zinc-900">

      <div className="flex flex-col items-center justify-center text-zinc-50 mb-6">
        <p className="text-5xl font-medium">Login</p>
      </div>

      <div className="relative z-0 w-64">
        <input 
          type="text"
          id="floatingEmail"
          className="block pt-2.5 pb-1 px-0.5 w-full text-base text-zinc-200 
          bg-transparent border-0 border-b-2 border-zinc-600 appearance-none 
          focus:outline-none focus:ring-0 focus:border-violet-500 peer"
          placeholder=" "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='off'
        />
        <label 
          htmlFor="floatingEmail"
          className="absolute text-base text-zinc-400 duration-300 transform -translate-y-6 
          scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-500 
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
      </div>

      <div className="relative z-0 w-64 mt-6">
        <input 
          type="password"
          id="floatingPassword"
          className="block pt-2.5 pb-1 px-0.5 w-full text-sm text-zinc-200 
          bg-transparent border-0 border-b-2 border-zinc-600 appearance-none 
          focus:outline-none focus:ring-0 focus:border-violet-500 peer"
          placeholder=" "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='off'
        />
        <label 
          htmlFor="floatingPassword"
          className="absolute text-base text-zinc-400 duration-300 transform -translate-y-6 
          scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-500 
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Senha
        </label>

        <button 
          className="w-full bg-zinc-600 text-zinc-100 hover:bg-zinc-500
          p-2 rounded-lg mt-6 transition-colors"
          onClick={() => {
            setError('') 
            handleLogin(email, password)
          }}
        >
          Entrar
        </button>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
      </div>
    </div>
  )
}