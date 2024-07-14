import { getAllUsers, getOneUser, getOneUserByUsername, createNewUser, updateOneUser, deleteOneUser } from '../../database/user.js'
import { v4 as uuidv4 } from 'uuid'

const allUsersService = () => {
  const allUsers = getAllUsers()
  return allUsers
}

const allUsersPaginatedService = (page, limit) => {
  // Recibo la pagina que quiero y el limite de saltos por pagina que debe hacer

  // Paso 1: Obtener todos los usuarios
  const allUsers = getAllUsers()

  // Paso 2: Calcular el numero de paginas
  const totalPages = Math.ceil(allUsers.length / limit)

  // Paso 3: Calcular el indice de inicio de la paginación segun la pagina que se quiere
  const startIndex = (page - 1) * limit

  // Paso 4: Calcular el indice final de la paginación segun el limite de saltos
  const endIndex = page * limit

  // Paso 5: Obtener los usuarios de la pagina que se quiere
  const users = allUsers.slice(startIndex, endIndex)

  // Paso 6: Retornar los usuarios de la pagina, el total de paginas y el total de usuarios
  return { users, totalPages, totalUsers: allUsers.length }
}

const getUserById = (userId) => {
  const user = getOneUser(userId)
  return user
}

const postUser = (newUser) => {
  const user = {
    ...newUser,
    id: uuidv4(),
    created_at: new Date().toLocaleString(),
    updated_at: new Date().toLocaleString()
  }

  const createdUser = createNewUser(user)
  return createdUser
}

const updateUser = (userId, body) => {
  try {
    const updatedUser = updateOneUser(userId, body)
    return updatedUser
  } catch (error) {
    console.log(error)
    throw error
  }
}

const deleteUser = (userId) => {
  const deleteUser = deleteOneUser(userId)
  return deleteUser
}

const findUser = (username) => {
  console.log(username)
  try {
    const findUser = getOneUserByUsername(username)
    return findUser
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default { allUsersService, allUsersPaginatedService, getUserById, postUser, updateUser, deleteUser, findUser }
