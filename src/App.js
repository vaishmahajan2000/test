
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Itemcard from './Components/ItemCard';
import Admin from './Components/AdminDash';
import AddUser from './Components/AddUser';

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/itemcard' element={<Itemcard></Itemcard>}/>
      <Route path='/admindash' element={<Admin></Admin>}/>
      <Route path='/adduser' element={<AddUser></AddUser>}/>
    </Routes>
    </BrowserRouter>
   
   </>
  );
}

export default App;
