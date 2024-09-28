import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-slate-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <NavLink to="/about" className="text-white hover:bg-slate-700 px-4 py-2 rounded" activeClassName="bg-blue-700" >Home</NavLink>
          <NavLink to="/contact" className="text-white hover:bg-slate-700 px-4 py-2 rounded" activeClassName="bg-blue-700" >Gallery</NavLink>
        </div>
      </nav>
      <main className="p-4">
          <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;