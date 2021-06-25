import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

// IMPORTER react-router-dom avec : npm install react-router-dom
// IMPORTER les trois compoonentns : Home, About et Users qui sont nos 3 pagesconst App = () => {
    
return (
        {/*  TOUTE L'APP doit etre encapsulée dans la balise Router */ }
       
       <Router>
        
        <div>
            {/* Cette barre de navigation ci dessous sera affichée quelque soit la page
        selectionné. Elle fait office de "header", on peut ici importer un component Header à la place et écrire toute la navigation dans header */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>        
                {/* Ici démarre vraiment la pagination et le choix de la page (ou plutot le composant react) à afficher selon la route écrite dans la barre d'adresse du navigateur */}
                <Switch>
                    <Route path="/about"><About />
                    </Route>
                    <Route path="/users">
                    <Users />
                    </Route>
                    <Route path="/">
                    <Home />
                    </Route>
                </Switch>
        </div>
        );
    }
export default App;


