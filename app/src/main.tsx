import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { getRouter } from './router.tsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={getRouter()} />
  </React.StrictMode>,
)
