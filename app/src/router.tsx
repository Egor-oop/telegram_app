import { RouteObject, createBrowserRouter } from 'react-router-dom'
import App from './App'
import { Profile } from './pages/Profile'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/profile',
    element: <Profile />
  }
]

export const getRouter = () => createBrowserRouter(routes)