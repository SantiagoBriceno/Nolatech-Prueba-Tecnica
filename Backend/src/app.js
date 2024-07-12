import express from 'express'
import cors from 'cors'
import usersRoutes from './routes/v1/users.routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/v1/users', usersRoutes)

export default app
