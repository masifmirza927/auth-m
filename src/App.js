import { createContext, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";
import StudentDetail from "./pages/StudentDetail"
import Edit from "./pages/Edit"

export const authContext = createContext("");

function App() {
  const [isLogin, setIsLogin] = useState(false);
  
  return (
    <authContext.Provider value={{ isLogin, setIsLogin }}>
      <div className="container">
       <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path='/student/:id' element={<StudentDetail />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>

      </div>
    </authContext.Provider>
  );
}

export default App;
