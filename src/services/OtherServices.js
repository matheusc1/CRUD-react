function saveToken(token) {
  localStorage.setItem('token', token)
}

function saveUser(user) {
  localStorage.setItem('user', JSON.stringify(user))
}

function getToken() {
  return localStorage.getItem('token')
}

function getUser() {
  return localStorage.getItem('user') ?? {}
}

function logout(navigate) {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  navigate('/login')
}

function userLoggedIn() {
  let token = getToken()

  return !!token
}

function validateUser(navigate) {
  let loggedIn = userLoggedIn()

  if (window.location.pathname == '/login') {
    if (loggedIn) {
      navigate('/')
    }
  }
  else if(!loggedIn && window.pathname !== '/login')  {
    navigate('/login')
  }
}

const authServices = {
  saveToken,
  saveUser,
  getToken,
  getUser,
  logout,
  userLoggedIn,
  validateUser
}

export default authServices