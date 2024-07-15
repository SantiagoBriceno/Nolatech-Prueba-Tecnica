import { useState, useEffect } from 'react'
import { validateUsername, validatePassword, validateName } from './inputConditions'
import { verifyPassword, updateUser } from '../service/user'
import { useNavigate } from 'react-router-dom'
export const useEditUser = ({ user }) => {
  const navigate = useNavigate()
  const [changes, setChanges] = useState()
  const [name, setName] = useState()
  const [username, setUsername] = useState()
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [validationName, setValidationName] = useState({ isValid: true, errorMessage: '' })
  const [validationUsername, setValidationUsername] = useState({ isValid: true, errorMessage: '' })
  const [validationNewPassword, setValidationNewPassword] = useState({ isValid: true, errorMessage: '' })
  const [validationConfirmPassword, setValidationConfirmPassword] = useState({ isValid: true, errorMessage: '' })

  useEffect(() => {
    if (name) {
      const objectValidation = validateName(name)
      setValidationName(objectValidation)
      if (objectValidation.isValid) {
        setChanges({ ...changes, name })
      }
    }
  }, [name])

  useEffect(() => {
    if (username) {
      const objectValidation = validateUsername(username)
      setValidationUsername(objectValidation)
      if (objectValidation.isValid) {
        setChanges({ ...changes, username })
      }
    }
  }, [username])

  useEffect(() => {
    if (newPassword) {
      const objectValidation = validatePassword(newPassword)
      setValidationNewPassword(objectValidation)
      if (objectValidation.isValid) {
        setChanges({ ...changes, password: newPassword })
      }
    }
  }, [newPassword])

  useEffect(() => {
    console.log(newPassword)
    console.log(confirmPassword)
    if (newPassword !== confirmPassword) {
      console.log('entro')
      setValidationConfirmPassword({ isValid: false, errorMessage: 'Las contraseñas no coinciden' })
    } else {
      setValidationConfirmPassword({ isValid: true, errorMessage: '' })
    }
  }, [confirmPassword])

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name)
    if (name === 'name') setName(value)
    if (name === 'username') setUsername(value)
    if (name === 'oldPassword') setOldPassword(value)
    if (name === 'newPassword') setNewPassword(value)
    if (name === 'confirmPassword') setConfirmPassword(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validationName.isValid && validationUsername.isValid && validationNewPassword.isValid && validationConfirmPassword.isValid) {
      if (!oldPassword) {
        console.log(changes)
        updateUser(user.id, changes)
        navigate('/users', { replace: true })
      } else {
        const { password } = user
        console.log(password)
        console.log(oldPassword)
        const data = { oldPassword, password }
        verifyPassword(data).then((res) => {
          console.log(res)
          if (res.isCorrect) {
            console.log(changes)
            window.alert('Contraseña correcta')
            updateUser(user.id, changes)
            navigate('/users', { replace: true })
          } else {
            window.alert('Contraseña incorrecta')
          }
        })
      }
    }
  }

  return {
    handleChange,
    validationName,
    validationUsername,
    validationNewPassword,
    validationConfirmPassword,
    handleSubmit
  }
}
