
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Carrousel from './components/Carroussel.js'
import Modale from './components/Modale.js'
import { useState } from 'react';
const App = () => {
  const [modaleShow, setModaleShow] = useState(true)
  return (
    <div>
      <Header setModaleShow={setModaleShow} />
      <Hero />
      <Carrousel />
      {modaleShow === true ?
        <Modale setModaleShow={setModaleShow} />
        :
        null
      }
    </div>
  )
}
export default App;