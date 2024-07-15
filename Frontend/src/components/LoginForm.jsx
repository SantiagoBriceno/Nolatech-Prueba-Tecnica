import MyInput from './Form/MyInput'
import './Form/MyForm.css'
import { useLoginUser } from '../hooks/useLoginUser'
import { NavLink } from 'react-router-dom'
export default function () {
  const { validationUsername, validationPassword, handleChange, handleSubmit } = useLoginUser()
  return (
    <div className='container'>

      <div className='form-container'>
        <div className='encabezado'>
          <h1>Iniciar Sesión</h1>
        </div>
        <hr />
        <form>
          <MyInput id='username' onChange={handleChange} placeholder='Username o Email' type='text' name='username' validation={validationUsername} />
          <MyInput id='password' onChange={handleChange} placeholder='Ingresa tu contraseña' type='password' name='password' validation={validationPassword} />

          <button type='submit' onClick={handleSubmit} className='btn btn-primary'>Ingresar</button>
        </form>
        <div className='form-footer'>
          <p>¿No tienes una cuenta? </p>
          <p><NavLink to='/register'>Regístrate Aquí</NavLink></p>

        </div>
      </div>

    </div>
  )
}
