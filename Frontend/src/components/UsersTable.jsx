import './table/table.css'
import { useUsers } from '../hooks/useUsers'

export default function () {
  const { users } = useUsers()
  console.log(users)
  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Username</th>
            <th>Fecha de creación</th>
            <th>Fecha de edición</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.created_at}</td>
              <td>{user.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
