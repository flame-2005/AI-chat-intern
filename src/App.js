import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Account from './components/Account';
import Login from './components/Login';
import Singup from './components/Singup';
import Chats from './components/Chats';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
        {/* <Route exact path="/about" element = {<About/>}>
          
          </Route> */}
        <Route exact path="/" element = { <Home/> }>
         
          </Route>
        <Route exact path="/account" element = { <Account/>}>
         
          </Route>
        <Route exact path="/login" element = { <Login/>}>
         
          </Route>
         <Route exact path="/singup" element = { <Singup/>}>
         
          </Route>
         <Route exact path="/chats" element = {<Chats/>}>
         
          </Route>
        
      </Routes>
      </Router>
    </>
  );
}

export default App;
