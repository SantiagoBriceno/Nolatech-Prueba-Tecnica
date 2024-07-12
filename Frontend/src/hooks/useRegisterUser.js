import { useState, useEffect } from 'react'
import { validateUsername, validatePassword } from './inputConditions'
import { createUser } from '../service/user'

export const useRegisterUser = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
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
      case 'nombre':
        setName(value)
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
    const user = {
      username,
      password,
      name
    }

    if (username === confirmUsername && password === confirmPassword) {
      // Verificamos que username tenga más de 8 caracteres y menos de 30
      if (username.length < 8 || username.length > 30) {
        window.alert('El username debe tener entre 8 y 30 caracteres')
      } else if (password.length < 8) {
        window.alert('La contraseña debe tener al menos 8 caracteres')
      } else if (name.length === 0) {
        window.alert('Ingresa tu nombre')
      } else {
        createUser(user).then((response) => {
          response.json().then((data) => {
            const { message } = data
            console.log({ message })
          })
        })
        window.alert('Usuario registrado correctamente')
      }
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
