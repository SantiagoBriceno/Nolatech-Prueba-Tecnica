// En este middleware validaremos la entrada que nos llega
// del front end para el registro de un usuario
// Y verificaremos que tenga el formato correcto
// req.body debe tener la siguiente estructura:
/*
{
  "username": "string",
  "name": "string",
  "password": "string",
}
*/

import bcrypt from 'bcrypt'

export const userValidator = (req, res, next) => {
  const { username, name, password } = req.body
  if (!username || !name || !password) {
    return res.status(400).json({ message: 'Faltan campos por llenar' })
  }
  if (typeof username !== 'string' || typeof name !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ message: 'Los campos deben ser de tipo string' })
  }
  if (username.length < 8 || username.length > 30) {
    return res.status(400).json({ message: 'El username debe tener entre 8 y 20 caracteres' })
  }
  if (password.length < 8) {
    return res.status(400).json({ message: 'La contraseña debe tener al menos 8 caracteres' })
  }
  if (/\s/.test(username) || /\s/.test(password)) {
    return res.status(400).json({ message: 'El username y la contraseña no deben tener espacios en blanco' })
  }

  req.body.user = {
    username,
    name,
    password: bcrypt.hashSync(password, 10) + ''
  }
  next()
}

// En este middleware validaremos la entrada que nos llega
// del front end para el registro de un usuario
// Y verificaremos que tenga el formato correcto
// req.body debe tener la siguiente estructura:
/*
{
  "username": "string",
  "password": "string",
}
*/

export const loginValidator = (req, res, next) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(400).json({ message: 'Faltan campos por llenar' })
  }
  if (typeof username !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ message: 'Los campos deben ser de tipo string' })
  }
  if (username.length < 8 || username.length > 30) {
    return res.status(400).json({ message: 'El username debe tener entre 8 y 30 caracteres' })
  }
  if (password.length < 8) {
    return res.status(400).json({ message: 'La contraseña debe tener al menos 8 caracteres' })
  }
  if (/\s/.test(username) || /\s/.test(password)) {
    return res.status(400).json({ message: 'El username y la contraseña no deben tener espacios en blanco' })
  }

  next()
}

/*
En este middleware verificaremos que el usuario que se quiere registrar no exista en la base de datos
Tendremos en la entrada req.body.user la siguiente estructura:
{
  "username": "string",
  "name": "string",
  "password": "string",
}
*/

// export const userExist = (req, res, next) => {
//   const { username } = req.body
//   const userExist = db.users.find(user => user.username === username)
//   if (userExist) {
//     return res.status(400).json({ message: 'El usuario ya existe' })
//   }
//   next()
// }
