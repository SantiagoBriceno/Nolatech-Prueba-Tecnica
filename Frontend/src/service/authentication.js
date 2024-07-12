import { RUTA_LOGIN } from '../constants'

export const loginUser = async (username, password) => {
  const response = await fetch(RUTA_LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  return response.json()
}
