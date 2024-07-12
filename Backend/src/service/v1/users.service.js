import { getAllUsers, getOneUser, getOneUserByUsername, createNewUser, updateOneUser, deleteOneUser } from '../../database/user.js'
import { v4 as uuidv4 } from 'uuid'

const allUsersService = () => {
  const allUsers = getAllUsers()
  return allUsers
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

export default { allUsersService, getUserById, postUser, updateUser, deleteUser, findUser }
