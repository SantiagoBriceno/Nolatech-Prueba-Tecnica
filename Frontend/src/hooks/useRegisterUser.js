import { useState, useEffect } from 'react'
import { validateUsername, validatePassword } from './inputConditions'

export const useRegisterUser = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmUsername, setConfirmUsername] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [validationUsername, setValidationUsername] = useState({ isValid: true, errorMessage: '' })
  const [validationPassword, setValidationPassword] = useState({ isValid: true, errorMessage: '' })

  const handleChange = (e) => {
    const { id, value } = e.target
    switch (id) {
      case 'username':
        setUsername(value)
        break
      case 'password':
        setPassword(value)
        break
      case 'confirmUsername':
        setConfirmUsername(value)
        break
      case 'confirmPassword':
        setConfirmPassword(value)
        break
      default:
        break
    }
  }

  // Validamos dinamicamente que los campos username y password cumplan con las reglas de validación
  // En este caso username debe tener entre 8 y 20 caracteres y no tener espacios en blanco
  // Y caso password debe tener al menos 8 caracteres y no tener espacios en blanco

  useEffect(() => {
    console.log(username)
    if (username.length > 0) {
      setValidationUsername(validateUsername(username))
    }
  }, [username])

  useEffect(() => {
    if (password.length > 0) {
      setValidationPassword(validatePassword(password))
    }
  }, [password])

  // Aqui validaremos que los campos sean iguales en confirmUsername y confirmPassword a username y password respectivamente
  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === confirmUsername && password === confirmPassword) {
      window.alert('Usuario registrado correctamente')
    } else {
      window.alert('Los campos no coinciden')
    }
  }

  return {
    username,
    password,
    confirmUsername,
    confirmPassword,
    validationUsername,
    validationPassword,
    handleChange,
    handleSubmit
  }
}
