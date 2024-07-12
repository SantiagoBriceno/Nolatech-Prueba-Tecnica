import { HiMiniSignal } from 'react-icons/hi2'
import { NavLink, Outlet } from 'react-router-dom'
export default function () {
  return (
    <>
      <header>
        <div>
          <span className='isLive'>
            Live &nbsp;&nbsp;
            <HiMiniSignal />
          </span>
          <span> Lorem ipsu dolor sit amet </span>
          <NavLink to='/login' className='to-login'>
            <span className='isJoin'> Join Now &nbsp;&nbsp;<i class='fa-solid fa-circle-play' /></span>
          </NavLink>
        </div>

      </header>

      <Outlet />

    </>

  )
}
