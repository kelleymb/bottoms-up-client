import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Post from '../Post/Post';
import Collection from '../Collection/Collection';
import Footer from '../Footer/Footer';
import './App.css';

function App() {  

  const RECIPES = [
    {
      name: 'Vodka drink recipe',
      main: 'Vodka',
      ingredients: 'vodka drink ingredients', 
      instructions: 'loremipsum loremipsum', 
    },
    {
      name: 'Tequila drink recipe',
      main: 'Tequila',
      ingredients: 'tequila drink ingredients', 
      instructions: 'loremipsum loremipsum',
    },
    {
      name: 'Gin drink recipe',
      main: 'Gin',
      ingredients: 'gin drink ingredients', 
      instructions: 'loremipsum loremipsum',
    },
    {
      name: 'Rum drink recipe',
      main: 'Rum',
      ingredients: 'rum drink ingredients', 
      instructions: 'loremipsum loremipsum', 
    },
    {
      name: 'Scotch drink recipe',
      main: 'Scotch',
      ingredients: 'scotch drink ingredients', 
      instructions: 'loremipsum loremipsum', 
    }
  ];

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
            path="/collection"
            render={() => (
              <Collection recipes={RECIPES.map(rec =>
                <section>
                  <p>Drink name: {rec.name}</p>
                  <p>Main liquor: {rec.main}</p>
                  <p>Ingredients: {rec.ingredients}</p>
                  <p>Instructions: {rec.instructions}</p>
                  <br></br>
                </section>)}
              />
            )}
          />
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
