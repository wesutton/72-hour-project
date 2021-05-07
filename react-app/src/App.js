import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Navbar from './components/site/Navbar'
import Footer from './components/site/Footer'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <Footer />

    </div>
  );
}

export default App;
