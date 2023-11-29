
import './App.css';
import Dasbord from './dashbord/main';
import Login from './login/Login';
import Auth from './singup/auth';
import SignUp from './singup/singup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
    <Routes>

     <Route path='/' element ={<Login/>}/>
     <Route path='signup' element ={<SignUp/>}/>
     <Route path='reg' element ={<Auth/>}/>
     <Route path='dashbord' element ={<Dasbord/>}/>


     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
