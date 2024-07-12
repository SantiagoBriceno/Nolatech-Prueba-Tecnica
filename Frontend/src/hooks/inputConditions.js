export const validateUsername = (username) => {
  console.log(username)
  if (username.length > 30) {
    return { isValid: false, errorMessage: 'El username no puede tener más de 20 caracteres' }
  }

  if (username.includes(' ')) {
    return { isValid: false, errorMessage: 'El username no puede tener espacios en blanco' }
  }

  // verificamos que el primer caracter sea una letra
  if (!username[0].match(/[a-z]/i)) {
    return { isValid: false, errorMessage: 'El username debe comenzar con una letra' }
  }

  return { isValid: true, errorMessage: '' }
}

export const validatePassword = (password) => {
  // if (password.length < 8) {
  //   return { isValid: false, errorMessage: 'La contraseña debe tener al menos 8 caracteres' }
  // }

  if (password.length > 20) {
    return { isValid: false, errorMessage: 'La contraseña no puede tener más de 20 caracteres' }
  }

  if (password.includes(' ')) {
    return { isValid: false, errorMessage: 'La contraseña no puede tener espacios en blanco' }
  }

  return { isValid: true, errorMessage: '' }
}
