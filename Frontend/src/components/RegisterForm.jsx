import MyInput from './Form/MyInput'
import './Form/MyForm.css'
import { useRegisterUser } from '../hooks/useRegisterUser'
export default function () {
  const { username, password, validationUsername, validationPassword, confirmPassword, confirmUsername, handleChange } = useRegisterUser()
  return (
    <div className='container'>

      <div className='form-container'>
        <div className='encabezado'>
          <h1>Regístrate</h1>
        </div>
        <hr />
        <form className='register-form'>
          <div className='input-container'>
            <p>Ingresa una dirección de correo válido / Username <span>(8-20 caracteres / sin espacios )</span> </p>
            <MyInput id='username' onChange={handleChange} placeholder='Example123' type='text' name='username' validation={validationUsername} />
            <MyInput id='confirmUsername' onChange={handleChange} placeholder='Confirmar Username o correo' type='text' name='confirmUsername' />
          </div>
          {/* Los campose serán username, confirmar username, contraseña, confirmar contraseña */}
          <div className='input-container'>
            <p>Ingresa tu contraseña <span>(mínimo 8 carácteres / sin espacios en blanco)</span></p>
            <MyInput id='password' onChange={handleChange} placeholder='Santi123' type='password' name='password' validation={validationPassword} />
            <MyInput id='confirmPassword' onChange={handleChange} placeholder='Confirmar contraseña' type='password' name='confirmPassword' />
          </div>

          <button type='submit' className='btn btn-primary'>Registrar</button>
        </form>
        <div className='form-footer'>
          <p>¿Ya tienes una cuenta? </p>
          <p><a href='/login'>Inicia Sesión aquí</a></p>

        </div>
      </div>

    </div>
  )
}
