import MyInput from './Form/MyInput'
import { useEditUser } from '../hooks/useEditUser'
export default function ({ user, handleCancel }) {
  const { handleChange, validationConfirmPassword, validationName, validationNewPassword, validationUsername, handleSubmit } = useEditUser({ user })
  return (
    <div className='edit-form'>
      <form>
        <MyInput label='Nombre' validation={validationName} onChange={handleChange} type='text' name='name' defaultValue={user.name} />
        <MyInput label='Username' validation={validationUsername} onChange={handleChange} type='text' name='username' defaultValue={user.username} />
        <hr />
        <MyInput label='Contraseña' onChange={handleChange} type='password' name='oldPassword' />

        <div className='input-group'>
          <div>
            <label>Nueva contraseña</label>
            <MyInput type='password' validation={validationNewPassword} onChange={handleChange} name='newPassword' />
          </div>
          <div>
            <label>Confirmar contraseña</label>
            <MyInput type='password' validation={validationConfirmPassword} onChange={handleChange} name='confirmPassword' />
          </div>
        </div>
        <hr />

        <div className='btn-group'>
          <button className='btn' onClick={handleSubmit} type='submit'>Guardar</button>
          <button className='btn' onClick={handleCancel} type='button'>Cancelar</button>
        </div>

      </form>
    </div>
  )
}
