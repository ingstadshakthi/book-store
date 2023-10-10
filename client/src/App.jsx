
import './App.css'
import Products from './components/Products/Products'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Cart from './components/Cart/Cart'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom'
import RootLayout from './components/RootLayout/RootLayout'
import ErrorPage from './components/ErrorPage/ErrorPage'
import PrivateAdminRoute from './components/PrivateAdminRoute/PrivateAdminRoute'
import CreateProduct from './components/CreateProduct/CreateProduct'
import { createContext, useState } from 'react'

export const UserContext = createContext();
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Products /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/cart', element: <Cart /> },
      {
        path: '/', element: <PrivateAdminRoute />, children: [{
          path: '/create', element: <CreateProduct />
        }]
      }
    ]
  },

])

function App() {
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)

  return <UserContext.Provider value={{ user, setUser }}>
    <RouterProvider router={router} />
  </UserContext.Provider>
}

export default App
