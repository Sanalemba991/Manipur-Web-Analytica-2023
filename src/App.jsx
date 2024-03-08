
import SignIn from './SignIn';
import './index.scss';
import NewDetails from './component/NewsDetail';

import May from './component/MaytoSep';


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Single from './pages/Single';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer'
import Write from './pages/Write';
import Oct from './component/Oct';
import Relief from './Relief';
import Mays from './component/Mays';
import October from './component/October';
import ReliefCamp from './component/ReliefCamp';
import Organization from './component/Organisaztion';
import Dead from './component/Dead';
import Addblog from './component/Addblog';
import BlogDisplay from './component/BlogDisplay';


// ...



const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <SignIn/>,
      children:[{
      path:"/",
      element:<Home/>


      }, ]
  
  
  },
  {
    path:"/post",
    element:<Single></Single>,
  },{
    path:"/write",
    element:<Write/>
  },

  
  {
    path:"/signin",
    element:<SignIn/>
  },


  {
    path:"/may",
    element:<May/>
  },
  {
    path:"/oct",
    element:<Oct/>
  },
  {
    path:"/relief",
    element:<Relief/>
  },
  {
    path:"/writes",
    element:<Write/>
  },
  {
    path:"/details",
    element:<NewDetails/>
  },
  
  {
    path:"/mays",
    element:<Mays/>
  },
  {
    path:"/october",
    element:<October/>
  },
  {
    path:"/rom",
    element:<ReliefCamp></ReliefCamp>
  },
  {
    path:"/org",
    element:<Organization/>
  },

  {
    path:"/dead",
    element:<Dead/>
  },
  {
    path:"/addblog",
    element:<Addblog></Addblog>
  },
  {
    path:"/displayblog",
    element:<BlogDisplay></BlogDisplay>
  },

]);
function App() {
  return (
   <div className='app'>
    <div className='container'>
       <RouterProvider router={router}/>
  </div>
   </div>)
}



export default App;


