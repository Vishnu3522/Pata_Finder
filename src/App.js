import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home>
        </Home>
        <Footer />

    </div>
  );
}

export default App;
