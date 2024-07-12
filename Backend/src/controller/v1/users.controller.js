import service from '../../service/v1/users.service'

export const getAllUsers = async (req, res) => {
  try {
    const users = await service.getAllUsers()
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
    const user = await service.createUser(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateUser = async (req, res) => {
  try {
    const user = await service.updateUser(req.params.id, req.body)
    res.status(200).json(user)
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
