import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Citas from './pages/Citas'
import Veterinarios from './pages/Veterinarios'
import Home from './pages/Home.jsx';

ReactDOM.render(
  <React.StrictMode>
   <Router>
     <Routes>
       <Route path="/" element={<App/>}>
          <Route path='/' element={<Home/>}/>
          <Route path="/citas" element={<Citas/>}/>
          <Route path="/veterinarios" element={<Veterinarios/>}/>
       </Route>
     </Routes>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
