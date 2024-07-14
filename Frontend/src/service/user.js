import { RUTA_USERS } from '../constants'

export const createUser = async (newUser) => {
  console.log(newUser)
  const response = await fetch(RUTA_USERS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
  return response
}

export const getUsers = async () => {
  const response = await fetch(RUTA_USERS)
  return response.json()
}

export const getPaginatedUsers = async (page, limit) => {
  const response = await fetch(`${RUTA_USERS}/paginated?page=${page}&limit=${limit}`)
  return response.json()
}

export const getUser = async (id) => {
  const response = await fetch(`${RUTA_USERS}/${id}`)
  return response.json()
}

export const deleteUser = async (id) => {
  const response = await fetch(`${RUTA_USERS}/${id}`, {
    method: 'DELETE'
  })
  return response.json()
}

export const verifyPassword = async (data) => {
  const response = await fetch(`${RUTA_USERS}/verify-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response.json()
}

export const updateUser = async (id, user) => {
  console.log(user)
  console.log(id)
  const response = await fetch(`${RUTA_USERS}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  return response.json()
}
