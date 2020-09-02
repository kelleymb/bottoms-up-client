import React, {Component} from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
            <section>
                <h2>About</h2>
                <h3>Why Bottoms Up?</h3>
                    <p>Since COVID hit the US, so much has changed in our routines. With quarantines and social distancing, things have never been so glum!</p>
                    <p>But fear not, Bottoms Up! is here to help you quarantine in style, whether it's a virtual happy hour or a weekend at home, we've got you covered. </p>
                    <p>Be your own bartender, search through recipes and even post your own creations!</p>
                    <p>If you're needing some inspiration, use our random drink generator courtesy of <a href="https://www.thecocktaildb.com/" target="_blank">Cocktail DB API</a> and if you need a break and want to pick up from a local brewery, check out the brewery locator courtesy of <a href="https://www.openbrewerydb.org/" target="_blank" >Open Brewery API</a></p>
                <h3>How to get started</h3>
                    <ol>
                        <li>Browse through our collection.</li>
                        <li>Use our random drink generator, or brewery locator.</li>
                        <li>Post your drink recipe to our collection!</li>
                    </ol>
            </section>
        );
    }
}

export default About;