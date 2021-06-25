import Header from './components/Header.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
           <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;