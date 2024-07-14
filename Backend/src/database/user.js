import db from './db.json' with { type: "json" }
import { saveToDatabase } from './utils.js'

const getAllUsers = () => {
  return db.users
}

const getOneUser = (userId) => {
  try{
    const user = db.users.find(user => user.id === userId)
    if (!user) {
      throw {
        status: 400,
        message: 'El usuario no existe'
      }
    }
    return user
  } catch(error){
    throw {
      status: error?.status || 500, message: error?.message || error
    }
  }
}

const getOneUserByUsername = (username) => {
  console.log(username)
  try{
    const userId = db.users.findIndex(user => user.username.toLowerCase() === username)
    if (userId === -1) {
      throw {
        status: 400,
        message: 'El usuario no existe'
      }
    }
    return db.users[userId]
  } catch(error){
    console.log(error)
    throw {
      status: error?.status || 500, message: error?.message || error
    }
  }

}

const createNewUser = (newUser) => {
   try{
     const userExist = db.users.findIndex(user => user.username.toLowerCase() === newUser.username.toLowerCase())
     if (userExist !== -1) {
       throw {
         status: 400,
         message: 'El usuario ya existe'
       }
     }
      db.users.push(newUser)
      saveToDatabase(db)
      return newUser
   }catch(error){
     throw {
       status: error?.status || 500, message: error?.message || error
     }
   }
}

const updateOneUser = (userId, data) => {
  console.log(userId, data)
  try{
    const indexForUpdated = db.users.findIndex(user => user.id === userId)
    console.log(indexForUpdated)

    if(indexForUpdated === -1){
      throw {
        status: 400,
        message: 'El usuario no existe'
      }
    }
  
    const updatedUser = {
      ...db.users[indexForUpdated],
      ...data,
      updated_at: new Date().toLocaleString()
    }

    db.users[indexForUpdated] = updatedUser
    saveToDatabase(db)
    return updatedUser
  }catch(error){
    throw {
      status: error?.status || 500, message: error?.message || error
    }
  }
}

const deleteOneUser = (userId) => {
  try{
    const indexForDeleted = db.users.findIndex(user => user.id === userId)
    if(indexForDeleted === -1){
      throw {
        status: 400,
        message: 'El usuario no existe'
      }
    }
    db.users.splice(indexForDeleted, 1)
    saveToDatabase(db)
  }catch(error){
    throw {
      status: error?.status || 500, message: error?.message || error
    }
  }
}

export { getAllUsers, getOneUser, getOneUserByUsername, createNewUser, updateOneUser, deleteOneUser } 
