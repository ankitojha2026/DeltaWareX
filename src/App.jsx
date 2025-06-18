
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Services from './pages/Services';
import Contact from './pages/Contact';




// here i'm using react-router-dom 
// and createBrowserRouter to create a router
const rounter = createBrowserRouter([
    {
        // here i'm creating a route for the app
        // and i'm using the path parameter to create a route
        // and i'm using the element parameter to create a route
        // and i'm using the errorElement parameter to create a route
        // and i'm using the children parameter to create a route
        // and i'm using the path parameter to create a route
        // and i'm using the element parameter to create a route
        // and i'm using the errorElement parameter to create a route
        // and i'm using the children parameter to create a route
        // and i'm using the path parameter to create a route
        path: '/',
        element: <AppLayout />,
        errorElement:<ErrorPage/>,
        children: [ {path: '/', element: <Home />},
        {path: 'about', element: <About />},
        {path: 'career', element: <Career />},
        {path: 'services', element: <Services />},
         {path: 'contact', element: <Contact />},
        // {path: 'career/:id', element: <CarrerOpt/>},
    ]

    }




  ]);



function App() {


  return (
<RouterProvider router={rounter} >

</RouterProvider>
  )
}
export default App;
