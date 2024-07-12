import { useEffect, useState } from 'react'

import { validateUsername, validatePassword } from './inputConditions'

export const useLoginUser = () => {
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

  const handleSubmit = (e) => {}

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
