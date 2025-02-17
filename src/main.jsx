import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeMain from './Home/HomeMain';
import ErrorPage from './404/ErrorPage';
import LoginMain from './Auth/login/LoginMain';
import RegisterMain from './Auth/register/RegisterMain';
import ContactMain from './Contact/ContactMain';
import AboutMain from './AboutMe/AboutMain';
import CategoriesMain from './Categories/CategoriesMain';
import ProductsMain from './Products/ProductsMain';

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

  {
    path: "/aboutme",
    element: <AboutMain/>,
  },

  {
    path: "/categories",
    element: <CategoriesMain/>,
  },

  {
    path: "/products",
    element: <ProductsMain/>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)