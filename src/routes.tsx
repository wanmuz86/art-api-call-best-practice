import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ProductList from "./pages/ProductList";
import ProductCreate from "./pages/ProductCreate";
import ProductDetail from "./pages/ProductDetail";
import ProductEdit from "./pages/ProductEdit";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <ProductList /> },
      { path: '/products/new', element: <ProductCreate /> },
      { path: '/products/:id', element: <ProductDetail /> },
      { path: '/products/:id/edit', element: <ProductEdit /> },
      {
        path: '*', element: <ProductList />
      },
    ]
  }

]);
