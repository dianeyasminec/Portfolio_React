import Home from './components/Home';
import Projects from './components/Projects';
import './Styles/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import About from './components/About'
import Navbar from './components/Navbar'
import user from './data/user'
import Footer from './components/Footer'
import One from './Images/One.gif'


function App() {
  return (
    <>
    <Navbar/>
    
    <Home One={One} />
    <About links={user.socialLinks} skills={user.skills} abilities={user.Technicals} interests={user.Interests}/>
    <Projects projects={user.projects}/> 
    <hr/>
    <Footer links={user.socialLinks}/>
    </>
  );
}

export default App;
