import { createRoot } from 'react-dom/client'
import './index.css'
import { lazy } from 'react'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'

const Cart = lazy(() => import("./components/Cart.jsx"))
const ProductDetails = lazy(() => import("./components/ProductDetails.jsx"))
const ProductList = lazy(() => import("./components/ProductList.jsx"))
const AllProducts = lazy(() => import("./components/AllProducts.jsx"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <ProductList /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "allproducts", element: <AllProducts /> },
      { path: "cart", element: <Cart /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
