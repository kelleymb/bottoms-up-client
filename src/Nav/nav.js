import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Post from '../Post/Post';
import Collection from '../Collection/Collection';
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <ul>
                <li className="nav" key={Home}><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav" key={Collection}><Link className="nav-link" to="/collections">Collection</Link></li>
                <li className="nav" key={Post}><Link className="nav-link" to="/post">Post</Link></li>
            </ul>
        );
    }
}

export default Nav;