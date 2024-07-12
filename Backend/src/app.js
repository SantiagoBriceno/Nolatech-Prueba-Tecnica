import express from 'express'
import cors from 'cors'
import usersRoutes from './routes/v1/users.routes.js'
import loginRoutes from './routes/v1/login.routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/v1/users', usersRoutes)
app.use('/api/v1/login', loginRoutes)

export default app
