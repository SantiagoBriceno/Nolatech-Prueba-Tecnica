import service from '../../service/v1/users.service.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET } from '../../config.js'

export const loginUser = async (req, res) => {
  const { username, password } = req.body
  console.log(username, password)
  try {
    const findUser = service.findUser(username)
    const passwordCorrect = findUser.length === 0
      ? false
      : await bcrypt.compare(password, findUser.password)
    if (!(findUser && passwordCorrect)) {
      return res.status(401).json({ error: 'Invalid username or password' })
    } else {
      const userForToken = {
        name: findUser.name,
        username: findUser.username,
        id: findUser.id
      }
      const token = jwt.sign(userForToken, SECRET)

      res.status(200).send({ token, username: findUser.username, name: findUser.name })
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
