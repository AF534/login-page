//import logo from './logo.svg';
import './App.css';
import Reacthome from './component/home';
import Reactlogin from './component/login';
import {BrowserRouter as  Router, Route, Routes} from  "react-router-dom"

function App() {
  return (
    <>
    <Router>
      <Routes>
        
       
        <Route path='/' element ={<Reacthome/> }/>
        <Route path='/login' element ={<Reactlogin/>}/>
      </Routes>
    </Router>

    {/* <Reacthome/>
    <Reactlogin/> */}
     
    </>
  );
}

export default App;
