import { RouteObject, createBrowserRouter } from 'react-router-dom'
import App from './App'
import { Profile } from './pages/Profile'
import { NewPost } from './pages/NewPost'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/newpost',
    element: <NewPost />
  }
]

export const getRouter = () => createBrowserRouter(routes)