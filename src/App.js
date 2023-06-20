import { createContext, useState } from 'react';
import './App.css';
import Parent from './Parent';

export const authContext = createContext("");

function App() {
  const [isLogin, setIsLogin] = useState(false);
  
  return (
    <authContext.Provider value={{ isLogin, setIsLogin }}>
      <div className="App">
        <div>App</div>
        <Parent />
      </div>
    </authContext.Provider>
  );
}

export default App;
