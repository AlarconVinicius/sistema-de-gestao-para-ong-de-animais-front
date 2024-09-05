import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MyFooter from './components/Footer/MyFooter';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <MyFooter />
    </div>
  );
}

export default App;

// import './App.css';
// import { useState } from 'react'
// import Navbar from './components/Navbar/Navbar.tsx'
// import MyFooter from './components/Footer/MyFooter.tsx';
// import { Outlet } from 'react-router-dom';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <Navbar />
//       <main>
//         <Outlet />
//       </main>
//       <MyFooter />
//     </div>
//   )
// }

// export default App
