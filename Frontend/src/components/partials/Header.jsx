import { HiMiniSignal } from 'react-icons/hi2'
import { NavLink, Outlet } from 'react-router-dom'
import { useSesionContext } from '../../context/SesionContext'
export default function () {
  const { logout } = useSesionContext()
  const user = JSON.parse(window.localStorage.getItem('auth'))

  return (
    <>
      <header>
        <div>
          <NavLink to='/' className='isLive'>
            <span
              className='isLive'
            >
              Live &nbsp;&nbsp;
              <HiMiniSignal
                className='home-icon'
              />
            </span>
          </NavLink>

          <span> Lorem ipsu dolor sit amet </span>
          {user
            ? (
              <NavLink
                onClick={() => {
                  logout()
                }} to='/' className='to-login'
              >
                <span className='isJoin'> Cerrar Sesión &nbsp;&nbsp;<i className='fa-solid fa-circle-play' /></span>
              </NavLink>
              )
            : (
              <NavLink to='/login' className='to-login'>
                <span className='isJoin'> Join Now &nbsp;&nbsp;<i className='fa-solid fa-circle-play' /></span>
              </NavLink>
              )}

        </div>

      </header>

      <Outlet />

    </>

  )
}
