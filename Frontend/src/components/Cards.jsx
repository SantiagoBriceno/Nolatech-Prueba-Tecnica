import pic1 from '../assets/Pic1.png'
import pic2 from '../assets/Pic2.png'
import pic3 from '../assets/Pic3.png'
import pic4 from '../assets/Pic4.png'
import pic5 from '../assets/Pic5.png'
import pic6 from '../assets/Pic6.png'
import pic7 from '../assets/Pic7.png'
import pic8 from '../assets/Pic8.png'
import pic9 from '../assets/Pic9.png'
import joinUs from '../assets/Join Us.png'
import '../styles/cards.css'
export default function () {
  return (
    <main>
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <FourCard />
      <FiveCard />
      <SixCard />
      <SevenCard />
    </main>
  )
}

const FirstCard = () => {
  return (
    <div className='firtsCard'>
      <div className='textFirst'>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        </p>
      </div>
      <img src={pic1} alt='pic1' className='imageFirstCard' />
    </div>
  )
}

const SecondCard = () => {
  return (
    <div className='secondCard'>
      <h1>Lorem ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
      <div className='secondCardContent'>
        <div className='card'>
          <img src={pic2} alt='pic2' className='cardImage' />
          <button className='btnCard'>LOREM IPSUM</button>
        </div>
        <div className='card'>
          <img src={pic3} alt='pic3' className='cardImage' />
          <button className='btnCard'>LOREM IPSUM</button>
        </div>
        <div className='card'>
          <img src={pic4} alt='pic4' className='cardImage' />
          <button className='btnCard'>LOREM IPSUM</button>
        </div>
      </div>
      <button className='btnSecondCard'>LEARN MORE</button>
    </div>
  )
}

const ThirdCard = () => {
  return (
    <div className='threeCard'>
      <div className='threeCardContent'>
        <p className='textCardThree'>
          Lorem ipsum
          dolor sit
          amet,
          consetetur
        </p>
        <button className='btnThreeCard'>LOREM IPSUM DOLOR SIT</button>
        <button className='btnThreeCard2'>LOREM IPSUM DOLOR SIT AMET</button>
      </div>
      <img src={pic5} alt='pic5' className='threeCardImage' />
    </div>
  )
}

const FourCard = () => {
  return (
    <div className='fourCard'>
      <h1>Latest videos</h1>
      <div className='fourCardContent'>
        <div className='fourCardFile'>
          <i className='fa-solid fa-play' />
          <img src={pic1} alt='file' />
          <p>
            Lorem ipsum dolor sit amet, consetetur
          </p>
        </div>
        <div className='fourCardFile'>
          <i className='fa-solid fa-play' />
          <img src={pic1} alt='file' />
          <p>
            Lorem ipsum dolor sit amet, consetetur
          </p>
        </div>
        <div className='fourCardFile'>
          <i className='fa-solid fa-play' />
          <img src={pic1} alt='file' />
          <p>
            Lorem ipsum dolor sit amet, consetetur
          </p>
        </div>
        <div className='fourCardFile'>
          <i className='fa-solid fa-play' />
          <img src={pic1} alt='file' />
          <p>
            Lorem ipsum dolor sit amet, consetetur
          </p>
        </div>
        <div className='fourCardFile'>
          <i className='fa-solid fa-play' />
          <img src={pic1} alt='file' />
          <p>
            Lorem ipsum dolor sit amet, consetetur
          </p>
        </div>
        <div className='fourCardFile'>
          <i className='fa-solid fa-play' />
          <img src={pic1} alt='file' />
          <p>
            Lorem ipsum dolor sit amet, consetetur
          </p>
        </div>
      </div>
      <button className='btnFourCard'>VIEW ALL</button>
    </div>
  )
}

const FiveCard = () => {
  return (
    <div className='fiveCard'>
      <img src={joinUs} alt='backgroun' />
      <div className='formFiveCard'>
        <h1 className='join-us'>JOIN US</h1>
        <h2 className='subtitle'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</h2>

        <div>
          <input
            type='text'
            className='inputFormBasic variant-1'
            placeholder='Name'
          />
          <input
            type='text'
            className='inputFormBasic variant-2'
            placeholder='Username'
          />
        </div>
        <div>
          <input
            type='text'
            className='inputFormBasic variant-1'
            placeholder='Phone'
          />
          <input
            type='text'
            className='inputFormBasic variant-2'
            placeholder='Email'
          />
        </div>
        <input
          type='text'
          className='inputFormBasic'
          placeholder='Departament'
        />
        <textarea
          className='inputFormBasic'
          placeholder='Mensaje'
        />
        <button className='btnStandar'>I’M IN</button>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>
      </div>
    </div>
  )
}

const SixCard = () => {
  return (
    <div className='sixCard'>
      <img src={pic6} alt='backgroun' />
      <div>
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua.
        </p>
        <button className='btnStandar'>VIEW ALL</button>
      </div>

    </div>
  )
}

const SevenCard = () => {
  return (
    <div className='sevenCard'>
      <h1>Lorem ipsum</h1>
      <div className='first'>
        <img src={pic7} alt='pci' />
        <img src={pic8} alt='pci' />
        <img src={pic9} alt='pci' />
      </div>
      <div className='second'>
        <i className='fa-solid fa-circle' />
        <i className='fa-regular fa-circle' />
        <i className='fa-regular fa-circle' />
      </div>
      <button className='btnStandar'>VIEW ALL</button>
    </div>
  )
}
