import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


import Home from './Home'
import About from './About'
import Contact from './Contact'
import Postlist from './Postlist'

function App() {

  return (
    <>
      <Router>
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
          <h1>My React multi-page App</h1>

          <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
              <li style={{ margin: '0 15px' }}>
                <Link to = '/' style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Home</Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to = '/about' style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>About</Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to = '/contact' style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Contact</Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to = '/postlist' style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Postlist</Link>
              </li>
              
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>            
            <Route path='/postlist' element={<Postlist/>}/>            

            <Route path='*' element={
              <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
                <h3>404 - Page not found.</h3>
                <Link to ='/' style={{ color: '#007bff' }}>Go-To Home</Link>
              </div>
            }/>
          </Routes>

          <hr style={{ marginTop: '40px' }}/>

        </div>
      </Router>
    </>
  );
}

export default App
