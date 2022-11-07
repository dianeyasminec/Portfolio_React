import Home from './components/Home';
import Projects from './components/Projects';
import './Styles/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import About from './components/About'
import Navigation from './components/Navigation'
import user from './data/user'
import Footer from './components/Footer'



function App() {
  return (
    <>
    <Navigation/>
    
    <Home  />
    <About links={user.socialLinks} skills={user.skills} abilities={user.Technicals} interests={user.Interests}/>
    <Projects projects={user.projects}/> 
    <hr/>
    <Footer links={user.socialLinks}/>
    </>
  );
}

export default App;
