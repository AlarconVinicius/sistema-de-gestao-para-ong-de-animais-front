import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import MyFooter from './components/Footer/MyFooter';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <MyFooter />
    </div>
  )
}

export default App
