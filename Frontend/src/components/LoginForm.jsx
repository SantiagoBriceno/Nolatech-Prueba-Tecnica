import MyInput from './Form/MyInput'
import './Form/MyForm.css'
import { useLoginUser } from '../hooks/useLoginUser'
export default function () {
  const { username, password, validationUsername, validationPassword, handleChange } = useLoginUser()
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
          <p className='recuperar'>¿Olvidaste la contraseña / username?</p>
          <button type='submit' className='btn btn-primary'>Ingresar</button>
        </form>
        <div className='form-footer'>
          <p>¿No tienes una cuenta? </p>
          <p><a href='/register'>Regístrate</a></p>

        </div>
      </div>

    </div>
  )
}
