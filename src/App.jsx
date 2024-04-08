import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Skill from './components/skills/skill'
import Portfolio from './components/Portfolio/portfolio'
import Client from './components/clients/client'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


function App() {
    return (
      <div>
        <Navbar/>
        <Hero/>
        <Skill />
        <Portfolio/>
        <Client/>
        <Contact/>
        <Footer/>
      </div>
    )
}

export default App
