import { getUsers } from '../service/user'
import { useState, useEffect } from 'react'

export const useUsers = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
  }, [])

  return { users }
}
