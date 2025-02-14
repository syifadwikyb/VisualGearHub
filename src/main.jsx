import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeMain from './Home/HomeMain';
import ErrorPage from './404/ErrorPage';
import LoginMain from './Auth/login/LoginMain';
import RegisterMain from './Auth/register/RegisterMain';
import ContactMain from './Contact/ContactMain';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeMain/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/login",
    element: <LoginMain />,
  },

  {
    path: "/register",
    element: <RegisterMain/>,
  },

  {
    path: "/contact",
    element: <ContactMain/>,
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)