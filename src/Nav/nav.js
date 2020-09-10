import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Post from '../Post/Post';
import Collection from '../Collection/Collection';
import OpenBrewery from '../OpenBreweryDB/OpenBrewery';
import Cocktail from '../CocktailDB/Cocktail';
import './Nav.css';


class Nav extends Component {
    render() {
        return (
            <ul className="app-nav">
                <li className="nav" key={Home}><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav" key={Collection}><Link className="nav-link" to="/collections">Collection</Link></li>
                <li className="nav" key={Post}><Link className="nav-link" to="/post">Post</Link></li>
                <li className="nav" key={Cocktail}><Link className="nav-link" to="/random">Cocktail Generator</Link></li>
                <li className="nav" key={OpenBrewery}><Link className="nav-link" to="/localbrew">Local Brewery</Link></li>
            </ul>
        );
    }
}

export default Nav;