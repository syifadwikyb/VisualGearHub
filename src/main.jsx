import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeMain from './Home/HomeMain';
import ErrorPage from './404/ErrorPage'
import App from './App'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeMain/>,
    errorElement: <ErrorPage/>
  },
  // {
  //   path: "/",
  //   element: <Halaman yang dipilih/>,
  // },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)