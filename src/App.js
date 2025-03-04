import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Nav1 from './Component/Nav';
import { Cart } from './Component/Cart';
import { Dashboard } from './Component/Dashboard';
import { Detail } from './Component/Detail';
import Category from './Component/Category';
import { Categorydata } from './Component/Categorydata';
import { Searchhistory } from './Component/Searchhistory';
import Login from './Component/Login';
import SignUp from './Component/Signup';
import { Profile } from './Component/Profile';


function App() {

  return (<>
    
       <BrowserRouter>
     <Nav1></Nav1>
       <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
       <Route path='/cart' element ={ <Cart></Cart>}></Route>
       <Route path='/detail' element ={ <Detail></Detail>}></Route>
       <Route path='/Category' element ={<Category></Category>}></Route>
       <Route path='/Categorydata' element ={<Categorydata></Categorydata>}></Route>
       <Route path='/search_history' element ={<Searchhistory></Searchhistory>}></Route>
       <Route path='/login' element ={<Login></Login>}></Route>
       <Route path='/Signup' element ={<SignUp></SignUp>}></Route>
       <Route path='/Profile' element ={<Profile></Profile>}></Route>
       </Routes>
       </BrowserRouter>
           </>);
}
export default App;
