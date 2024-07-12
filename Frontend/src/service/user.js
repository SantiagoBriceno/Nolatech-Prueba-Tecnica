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
