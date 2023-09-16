import api from './api'
import authServices from './OtherServices'

export async function authenticate(email, senha) {
  try {
    const response = await api.post('/login', {email, senha})
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export async function getClients() {
  try {
    const response = await api.get('/clientes', {
      headers: {
        'Authorization': authServices.getToken()
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export async function addClient(client) {
  try {
    const response = await api.post('/clientes', client,
    {
      headers: {
        'Authorization': authServices.getToken()
      },
    })
    return response.data
  } catch (error) {
    console.error(error.response.data)
  }
}

// export async function editClient(id, client) {
//   try {
//     const response = await api.put(`/clientes/${id}`, client,
//     {
//       headers: {
//         'Authorization': authServices.getToken()
//       },
//     })
//     return response.data
//   } catch (error) {
//     console.error(error)
//   }
// }