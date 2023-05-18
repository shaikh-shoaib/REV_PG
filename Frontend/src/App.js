import logo from './logo.svg';
import './App.css';
import Home from './Components/Pages/Home';
import Admin from './Components/Pages/Admin/Admin';
import Owner from './Components/Pages/Owner/Owner';
import User from './Components/Pages/User/User';
import Login from './Components/Pages/Login/Login';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
function App() {

  //creating different routers
  const routers=createBrowserRouter(
    [{path:"/Admin",element:<Admin/>},
     {path:"/Owner",element:<Owner/>},
     {path:"/User",element:<User/>},
     {path:"/",element:<Home/>},
     {path:"/Login",element:<Login/>}
    ]
  )
  return (
    <div className="App">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
