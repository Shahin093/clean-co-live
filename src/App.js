import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { publicRoute } from './routes/publicRoute';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar>
        <Routes>
          {/* <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/login' element={<Login></Login>}></Route> */}
          {/* <PublicRoutes></PublicRoutes> */}
          {
            publicRoute.map(route => <Route path={route.path} element={<route.Component />}></Route>)
          }
        </Routes>


      </Navbar>

    </div>
  );
}

export default App;
