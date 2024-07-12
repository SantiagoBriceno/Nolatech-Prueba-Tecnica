import { Router } from 'express'
import { loginValidator } from '../../middleware/v1/userValidator.js'
import { loginUser } from '../../controller/v1/login.controller.js'

const router = Router()

router.post('/', loginValidator, loginUser)

export default router
