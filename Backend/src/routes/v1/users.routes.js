import { Router } from 'express'
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../../controllers/users.controller'

const router = Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
