import { getUsers, deleteUser, getUser, getPaginatedUsers } from '../service/user'
import { useState, useEffect } from 'react'

export const useUsers = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState()
  const [userView, setUserView] = useState()
  const [onOpenView, setOnOpenView] = useState(false)
  const [onOpenEdit, setOnOpenEdit] = useState(false)

  // PARA LA PAGINACIÓN:

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [pageSize] = useState(5)

  // Traemos todos los usuarios
  // useEffect(() => {
  //   getUsers()
  //     .then((data) => setUsers(data))
  // }, [])

  useEffect(() => {
    getPaginatedUsers(currentPage, pageSize)
      .then((data) => {
        console.log(data)
        setUsers(data.users)
        setTotalPages(data.totalPages)
      })
  }, [currentPage, pageSize])

  const handlePage = (e) => {
    // Si el boton es Anterior y la pagina actual es igual a 1 o el boton es Siguiente y la pagina actual es igual al total de paginas retornamos
    if ((e.target.id === 'previous' && currentPage === 1) || (e.target.id === 'next' && currentPage === totalPages)) {
      return
    }
    // Si el boton es Anterior restamos 1 a la pagina actual
    if (e.target.id === 'previous') {
      setCurrentPage(currentPage - 1)
    }
    // Si el boton es Siguiente sumamos 1 a la pagina actual
    if (e.target.id === 'next') {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleDelete = (e) => {
    console.log(e.target.id)
    const index = e.target.id.split('-')[1]
    const id = users[index].id
    if (id) {
      deleteUser(id).then((response) => {
        console.log(response)
      })
      window.location.reload()
    }
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

  return { users, handleDelete, handleEdit, handleView, onOpenEdit, onOpenView, handleCloseEdit, handleCloseView, user, userView, currentPage, totalPages, handlePage }
}
