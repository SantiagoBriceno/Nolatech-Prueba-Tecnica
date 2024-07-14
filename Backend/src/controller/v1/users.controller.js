import service from '../../service/v1/users.service.js'
import bcrypt from 'bcrypt'

export const getAllUsers = async (req, res) => {
  try {
    const users = await service.allUsersService()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllUsersPaginated = async (req, res) => {
  const { page, limit } = req.query
  try {
    const users = await service.allUsersPaginatedService(page, limit)
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await service.getUserById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createUser = async (req, res) => {
  try {
    const user = await service.postUser(req.body.user)
    res.status(201).json({
      message: 'Usuario creado correctamente',
      user
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateUser = async (req, res) => {
  const { body, params } = req
  const { password } = body

  if (password) {
    body.password = await bcrypt.hash(password, 10)
  }

  if (!params.id) {
    res.status(400).json({ message: 'Falta el id del usuario a modificar' })
  }

  try {
    const updatedUser = await service.updateUser(params.id, body)
    res.status(200).json({
      message: 'Usuario actualizado correctamente',
      updatedUser
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const deleteUser = await service.deleteUser(req.params.id)
    res.status(204).json({
      deleteUser,
      message: 'Usuario eliminado correctamente'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const verifyPassword = async (req, res) => {
  const { oldPassword, password } = req.body
  try {
    const isCorrect = await bcrypt.compare(oldPassword, password)
    if (!isCorrect) {
      res.status(401).json({ isCorrect: false, message: 'Contraseña incorrecta' })
    }
    res.status(200).json({ isCorrect, message: 'Contraseña verificada correctamente' })
  } catch {
    res.status(500).json({ isCorrect: false, message: 'Error al verificar la contraseña' })
  }
}
