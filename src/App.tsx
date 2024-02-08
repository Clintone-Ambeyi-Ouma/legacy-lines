import Home from "./Pages/Home/home"
import Users from "./Pages/Users/users"
import Products from "./Pages/Products/products"
import Menu from "./Components/Menu/Menu";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Login/login";
import "./styles/global.scss"
import Timeline from "./Components/Timeline/Timeline";
import FamilyTree from "./Components/FamilyTree/familyTree";

import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";
import Register from "./Components/Registration/Register";
import User from "./Pages/Users/User/User";
import Product from "./Pages/Users/Product/Product";


function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer"><Menu /></div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>

        <Footer />
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "users",
          element: <Users />
        },
        {
          path: "products",
          element: <Products />
        },
        {
          path: "login",
          element: <Login />
        }
        ,
        {
          path: "register",
          element: <Register />
        }
        ,
        {
          path: "timeline",
          element: <Timeline />
        },
        {
          path: "tree",
          element: <FamilyTree />
        },
        {
          path: "/users/:id",
          element: <User />
        },
        {
          path: "/products/:id",
          element: <Product />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App

// npm run dev
// npm create vite@latest
