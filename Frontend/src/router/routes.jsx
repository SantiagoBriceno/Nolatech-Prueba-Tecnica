import { createBrowserRouter } from 'react-router-dom'
import HomeView from '../views/Home.view'
import LoginView from '../views/Login.view'
import Header from '../components/partials/Header'
import RegisterView from '../views/Register.view'
import UsersView from '../views/Users.view'

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

          element: <LoginView />

        },
        {
          path: '/register',
          element: <RegisterView />

        },
        {
          path: '/users',
          element: <UsersView />
        }
      ]
    }
  ]
)
