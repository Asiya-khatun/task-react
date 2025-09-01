import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Frontpage/Navbar'
import './App.css'
import Mealtime from './Frontpage/Mealtime'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Playbox from './Frontpage/Playboxes'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {

  return (
          <Router>
    <div className='header'>
        <Navbar />
        </div>
      

    <div className='main'>
      <Routes>
        <Route path='/mealtime' element={<Mealtime />} />
        <Route path='/playboxes' element={<Playbox/>}></Route>
      </Routes>
</div>

   
      </Router>
  );
}

export default App
