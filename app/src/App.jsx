import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage.jsx';
const Home = lazy(() => import('./Pages/Homepage.jsx'));


export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}