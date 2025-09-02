import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route, useLocation} from 'react-router-dom';
import Navbar from './Frontpage/Navbar'
import Mealtime from './Frontpage/Mealtime'
import Playbox from './Frontpage/Playboxes'
import Playtime from './Frontpage/Playtime';


function App() {
  const location = useLocation();
  const isMain = location.pathname !== '/';

  return (
    <>
      <div className='header'>
        <Navbar />
      </div>
      <div className={`main${isMain ? 'show' : ''}`}>
        <Routes>
          <Route path='/' element={<div className='mainpage'>This is Main Page</div>} />
          <Route path='/mealtime' element={<Mealtime />} />
          <Route path='/playboxes' element={<Playbox />}></Route>
          <Route path='/playtime' element={<Playtime/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App
