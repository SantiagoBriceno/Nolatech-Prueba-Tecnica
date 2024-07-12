import service from '../../service/v1/users.service.js'

export const getAllUsers = async (req, res) => {
  try {
    const users = await service.allUsersService()
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
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateUser = async (req, res) => {
  const { body, params } = req

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
    await service.deleteUser(req.params.id)
    res.status(204).json()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// export const deleteUser = async (req, res) => {
//   try {
//     await service.deleteUser(req.params.id)
//     res.status(204).json()
//   } catch (error) {
//     res.status(500).json({ message: error.message })
//   }
// }
