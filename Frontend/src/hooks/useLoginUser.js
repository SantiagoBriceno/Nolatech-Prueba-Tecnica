import { useEffect, useState } from 'react'

import { validateUsername, validatePassword } from './inputConditions'

import { loginUser } from '../service/authentication'

import { useSesionContext } from '../context/SesionContext'

export const useLoginUser = () => {
  const { login } = useSesionContext()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [validationUsername, setValidationUsername] = useState({ isValid: true, errorMessage: '' })
  const [validationPassword, setValidationPassword] = useState({ isValid: true, errorMessage: '' })

  // validamos que el usuario haya ingresado un username valido (no debe tener signos de puntuacion al inicio, no debe tener espacios en blanco)
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

  const handleChange = (e) => {
    console.log(e.target.id)
    const { id, value } = e.target
    id === 'username' ? setUsername(value) : setPassword(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    console.log(username)
    console.log(password)
    if (username.length < 8 || username.length > 30) {
      window.alert('El username debe tener entre 8 y 30 caracteres')
    } else if (password.length < 8) {
      window.alert('La contraseña debe tener al menos 8 caracteres')
    } else {
      loginUser(username, password).then((response) => {
        console.log(response)
        const { token, error, message } = response
        if (token) {
          login(token)
          window.alert('Usuario logueado correctamente')
        } else {
          window.alert(error || message)
        }
      })
    }
  }

  return {
    username,
    password,
    validationUsername,
    validationPassword,
    setValidationUsername,
    setValidationPassword,
    handleChange,
    handleSubmit
  }
}
