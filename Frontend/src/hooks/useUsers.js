import { getUsers, deleteUser, getUser } from '../service/user'
import { useState, useEffect } from 'react'

export const useUsers = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState()
  const [userView, setUserView] = useState()
  const [onOpenView, setOnOpenView] = useState(false)
  const [onOpenEdit, setOnOpenEdit] = useState(false)

  const handleDelete = (e) => {
    console.log(e.target.id)
    const index = e.target.id.split('-')[1]
    const id = users[index].id
    deleteUser(id).then((data) => {
      console.log(data)
    })
  }

  const handleEdit = (e) => {
    console.log(e.target.id)
    const index = e.target.id.split('-')[1]
    const id = users[index].id
    getUser(id).then((data) => {
      console.log(data)
      setUser(data)
    })
  }

  const handleView = (e) => {
    // Abrimos la modal
    console.log(e.target.id)
    const index = e.target.id.split('-')[1]
    const id = users[index].id
    getUser(id).then((data) => {
      setUserView(data)
    })
  }

  useEffect(() => {
    if (user) {
      setOnOpenEdit(true)
    }
  }, [user])

  useEffect(() => {
    if (userView) {
      setOnOpenView(true)
    }
  }, [userView])

  const handleCloseView = () => {
    setOnOpenView(false)
    setUserView(null)
  }

  const handleCloseEdit = () => {
    setOnOpenEdit(false)
    setUser(null)
  }

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
  }, [])

  return { users, handleDelete, handleEdit, handleView, onOpenEdit, onOpenView, handleCloseEdit, handleCloseView, user, userView }
}
