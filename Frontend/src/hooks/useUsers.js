import { getUsers, deleteUser, getUser } from '../service/user'
import { useState, useEffect } from 'react'

export const useUsers = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState()
  const [onOpenView, setOnOpenView] = useState(false)
  const [onOpenEdit, setOnOpenEdit] = useState(false)

  const handleDelete = (e) => {
    const id = e.target.id.split(' ')[1]
    console.log(id)
    deleteUser(id).then((data) => {
      console.log(data)
    })
  }

  const handleEdit = (e) => {
    const id = e.target.id.split(' ')[1]
    getUser(id).then((data) => {
      console.log(data)
      setUser(data)
    })
  }

  useEffect(() => {
    if (user) {
      setOnOpenEdit(true)
    }
  }, [user])

  const handleView = (e) => {
    // Abrimos la modal

    const id = e.target.id.split(' ')[1]
    console.log(id)
    getUser(id).then((data) => {
      console.log(data)
      setUser(data)
    })
    setOnOpenView(true)
  }

  const handleCloseView = () => {
    setOnOpenView(false)
  }

  const handleCloseEdit = () => {
    setOnOpenEdit(false)
  }

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
  }, [])

  return { users, handleDelete, handleEdit, handleView, onOpenEdit, onOpenView, handleCloseEdit, handleCloseView, user }
}
