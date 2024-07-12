import { createBrowserRouter } from 'react-router-dom'
import HomeView from '../views/Home.view'
import LoginView from '../views/Login.view'
import Header from '../components/partials/Header'
import RegisterForm from '../components/RegisterForm'

import { SesionContextProvider } from '../context/SesionContext'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Header />,
      children: [
        {
          path: '/',
          element: <HomeView />
        },
        {
          path: '/login',

          element:
          (
            <SesionContextProvider>
              <LoginView />
            </SesionContextProvider>
          )
        },
        {
          path: '/register',
          element: <RegisterForm />

        }
      ]
    }
  ]
)
