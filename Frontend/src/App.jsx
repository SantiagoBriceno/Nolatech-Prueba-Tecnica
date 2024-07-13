import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes'
import './index.css'
import { SesionContextProvider } from './context/SesionContext'

function App () {
  return (
    <SesionContextProvider>
      <RouterProvider router={router} />
    </SesionContextProvider>

  )
}

export default App
