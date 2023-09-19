import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3400',
})

api.interceptors.request.use(config => {
  config.headers.Authorization = localStorage.getItem("token")
  return config;
})

export default api