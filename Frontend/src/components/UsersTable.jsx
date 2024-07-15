import '../styles/table.css'
import { useUsers } from '../hooks/useUsers'
import { FiXCircle, FiEdit } from 'react-icons/fi'
import { LuEye } from 'react-icons/lu'
import EditForm from './EditForm'

export default function () {
  const { users, handleDelete, handleEdit, handleView, user, userView, onOpenView, onOpenEdit, handleCloseView, handleCloseEdit, currentPage, handlePage, totalPages } = useUsers()
  console.log(users)
  return (
    <div className='container'>
      <div className='card'>
        <h1>Lista de Usuarios</h1>
        <table className='table'>

          <thead>
            <tr>
              <th>N°</th>
              <th>Nombre</th>
              <th>Username</th>
              <th>Fecha de creación</th>
              <th>Fecha de edición</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.created_at}</td>
                <td>{user.updated_at}</td>
                <td className='icon-container'>
                  <LuEye title='Visualizar datos' id={`V-${index}`} onClick={handleView} className='icon view' />
                  <FiEdit title='Editar usuario' id={`E-${index}`} onClick={handleEdit} className='icon edit' />
                  <FiXCircle title='Borrar Usuario' id={`D-${index}`} onClick={handleDelete} className='icon delete' />
                </td>
              </tr>
            ))}
          </tbody>
          {/* Bottones de paginación */}
          <tfoot>
            <tr>
              <td colSpan='6'>
                <div className='pagination-btn'>
                  <button id='previous' onClick={handlePage}>Anterior</button>
                  <span>{currentPage} / {totalPages}</span>
                  <button id='next' onClick={handlePage}>Siguiente</button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
        {
        onOpenView &&
          <ModalView title='Visualizar un usuario' onClose={handleCloseView}>
            <div className='visualizar-user'>
              <p><span>Id en Database:</span></p>
              <p>{userView.id}</p>
              <p><span>Nombre:</span></p>
              <p>{userView.name}</p>
              <p><span>Username:</span></p>
              <p>{userView.username}</p>
              <p><span>Contraseña</span></p>
              <p>{userView.password}</p>
              <p><span>Fecha de creación:</span></p>
              <p>{userView.created_at}</p>
              <p><span>Fecha de edición:</span></p>
              <p>{userView.updated_at}</p>

            </div>

          </ModalView>
        }
        {
        onOpenEdit && user &&
          <ModalView title='Editar usuario' onClose={handleCloseEdit}>
            <EditForm user={user} handleCancel={handleCloseEdit} />
          </ModalView>
        }
      </div>

    </div>
  )
}

const ModalView = ({ onClose, children, title }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h2>{title}</h2>
          <FiXCircle className='close' onClick={onClose} />
        </div>
        <hr />
        {children}
        {/* <h2>Usuario</h2>
        <p>Nombre: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Fecha de creación: {user.created_at}</p>
        <p>Fecha de edición: {user.updated_at}</p> */}
      </div>
    </div>
  )
}
