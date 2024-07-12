// En este middleware validaremos la entrada que nos llega
// del front end para el registro de un usuario
// Y verificaremos que tenga el formato correcto
// req.body.user debe tener la siguiente estructura:
/*
{
  "username": "string",
  "nombre": "string",
  "password": "string",
}
*/

export const userValidator = (req, res, next) => {
  const { username, nombre, password } = req.body.user
  if (!username || !nombre || !password) {
    return res.status(400).json({ message: 'Faltan campos por llenar' })
  }
  if (typeof username !== 'string' || typeof nombre !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ message: 'Los campos deben ser de tipo string' })
  }
  if (username.length < 8 || username.length > 20) {
    return res.status(400).json({ message: 'El username debe tener entre 8 y 20 caracteres' })
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
  "nombre": "string",
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
