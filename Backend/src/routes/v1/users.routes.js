import { Router } from 'express'
import { userValidator } from '../../middleware/v1/userValidator.js'
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../../controller/v1/users.controller.js'

const router = Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', userValidator, createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
