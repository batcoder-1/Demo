import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthPage from './components/Auth.jsx'
import UserLogin from './components/UserLogin'
import AdminLogin from './components/AdminLogin'
import { createBrowserRouter,RouterProvider } from 'react-router'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  children: [
    {
      path: '/',
      element: <AuthPage />,
    }
    ,
    {
      path: '/auth/user',
      element: <UserLogin />,
    },
    {
      path: '/auth/admin',
      element: <AdminLogin />,
    }
  ]
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
