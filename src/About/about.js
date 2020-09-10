import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './About.css';

class About extends Component {
    render() {
        return (
            <section className="about">
                <h2 className="about-hdr">About</h2>
                <h3 className="why">Why Bottoms Up?</h3>
                    <section className="why-text">
                       <p>Since COVID hit the US, so much has changed in our routines. With quarantines and social distancing, things have never been so glum!</p>
                        <p>But fear not, Bottoms Up! is here to help you quarantine in style, whether it's a virtual happy hour or a weekend at home, we've got you covered.</p>
                        <p>Be your own bartender, search through various Vodka, Gin, Scotch, Tequila, and Rum recipes and even post your own creations!</p> 
                    </section>
                <h3 className="how">How to get started</h3>
                    <ol className="">
                        <li><Link className="nav-link" to="/collections">Browse through our collection.</Link></li>
                        <li>Use our <Link className="nav-link" to="/random">random cocktail generator</Link>, or <Link className="nav-link" to="/localbrew">brewery locator</Link>.</li>
                        <li><Link className="nav-link" to="/post">Post</Link> your drink recipe to our collection!</li>
                    </ol>
            </section>
        );
    }
}

export default About;