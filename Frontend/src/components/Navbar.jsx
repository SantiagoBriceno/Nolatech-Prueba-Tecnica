import prbHeader from '../assets/Prb_Header.png'
import iconGrab from '../assets/icongrab.png'
export default function () {
  return (
    <nav>
      <img src={prbHeader} alt='Prb_header' className='Navbackground' />
      <NavBarContent />
    </nav>
  )
}

const NavBarContent = () => {
  return (
    <div className='contentNav'>
      <div className='headerNav'>
        <img src={iconGrab} alt='grab' className='iconHeadernNav' />
        <div className='contentNavBody'>
          <div className='routeNav'>
            <a href='' className='route'>LOREM IPSUM</a>
            <a href='' className='route'>LOREM IPSUM</a>
            <a href='' className='route'>LOREM IPSUM</a>
            <a href='' className='route'>LOREM IPSUM</a>
            <a href='' className='route'>LOREM IPSUM</a>
            <a href='' className='route'>LOREM IPSUM</a>
          </div>
          <div className='bodyNav'>

            <h1 className='bodyNavTitle'>LOREM IPSUM</h1>
            <h1 className='bodyNavTitle2'>LOREM IPSUM DOLOR &nbsp;</h1>
            <h1 className='bodyNavTitle'>LOREM IPSUM</h1>

            <button className='bodyNavButton'>WHAT IS NEXT</button>
          </div>
        </div>
      </div>
      <NavBarFooter />

    </div>
  )
}

const NavBarFooter = () => {
  return (
    <div className='footerNav'>
      <div className='footerContenTextNav'>
        <p>Lorem ipsum dolor sit
          amet, consetetur
        </p>
      </div>
      <div className='footerContenTimeNav'>
        <div className='blockTime'>
          <span>170</span>
          <span className='blockSpan'>days</span>
        </div>
        <hr className='divider' />
        <div className='blockTime'>
          <span>13</span>
          <span className='blockSpan'>Hour</span>
        </div>
        <hr className='divider' />
        <div className='blockTime'>
          <span>39</span>
          <span className='blockSpan'>Minutes</span>
        </div>
        <hr className='divider' />
        <div className='blockTime'>
          <span>29</span>
          <span className='blockSpan'>Seconds</span>
        </div>
      </div>
    </div>
  )
}
