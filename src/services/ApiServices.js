import api from './api'

export async function authenticate(email, senha) {
  try {
    const { data } = await api.post('/login', {email, senha})
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function getClients() {
  try {
    const { data } = await api.get('/clientes')
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function addClient(client) {
  try {
    const { data } = await api.post('/clientes', client)
    return data
  } catch (error) {
    console.error(error.response.data)
  }
}

export async function editClient(id, client) {
  try {
    const { data } = await api.put(`/clientes/${id}`, client)
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function deleteClient(id) {
  try {
    const { data } = await api.delete(`/clientes/${id}`)
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function getProducts() {
  try {
    const { data } = await api.get('/produtos')
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function addProduct(product) {
  try {
    const { data } = await api.post('/produtos', product)
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function editProduct(id, product) {
  try {
    const { data } = await api.put(`/produtos/${id}`, product)
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function deleteProduct(id) {
  try {
    const { data } = await api.delete(`/produtos/${id}`)
    return data
  } catch (error) {
    console.error(error)
  }
}