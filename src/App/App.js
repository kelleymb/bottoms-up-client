import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Post from '../Post/Post';
import Collection from '../Collection/Collection';
import Footer from '../Footer/Footer';
import OpenBrewery from '../OpenBreweryDB/OpenBrewery';
import Cocktail from '../CocktailDB/Cocktail';
import './App.css';


function App() {  

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>Bottoms Up!</h1>
      </header>
      <main>
      <Route>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            path="/about"
            component={About}
          />
          <Route
            path="/post"
            component={Post}
          />
          <Route
            path="/collections"
            component={Collection}
          />
          <Route
            path="/random"
            component={Cocktail}
          />
          <Route
            path="/localbrew"
            component={OpenBrewery}
          />
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
