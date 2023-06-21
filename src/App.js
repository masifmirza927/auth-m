import { createContext, useState } from 'react';
import './App.css';
import Parent from './Parent';
import Navbar from './components/Navbar';

export const authContext = createContext("");

function App() {
  const [isLogin, setIsLogin] = useState(false);
  
  return (
    <authContext.Provider value={{ isLogin, setIsLogin }}>
      <div className="container">
       <Navbar />
      </div>
    </authContext.Provider>
  );
}

export default App;
