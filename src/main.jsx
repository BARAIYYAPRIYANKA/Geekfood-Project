import ReactDOM from 'react-dom/client';
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { RouterProvider, createBrowserRouter,Outlet } from 'react-router-dom'
import Contact from './components/Contact';
import "./index.css"
import Quote from './components/Quote';
import Restaurants from './components/Restaurants';
import Foods from './components/Foods';
import FoodDetails from './components/FoodDetails';


function App() {
  return (
    <div style={{overflow:"hidden"}}>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  );
}


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/quote",
        element:<Quote />
      },
      {
        path:"/restaurant",
        element:<Restaurants />
      },
      {
        path:"/foods",
        element:<Foods />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/fooddetail/:id",
        element:<FoodDetails />
      },
      
    ],    
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)