import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Cadastro } from './Pages/Cadastro/index.tsx'
import { Login } from './Pages/Login/index.tsx'
import { Dashboard } from './Pages/Dashboard/index.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: (
      <Cadastro/>
    )
  },
  {
    path:"/login",
    element: (
      <Login/>
    )
  },
  {
    path:"/dashboard",
    element: (
      <Dashboard/>
    )
  },
  {
    path:"*",
    element: (
      <Cadastro/>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
