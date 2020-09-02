import React, {Component} from 'react';
import Cocktail from '../CocktailDB/Cocktail';
import OpenBrewery from '../OpenBreweryDB/OpenBrewery';
import './Collection.css';

const vodka = [
    { 
        name: "vodka-drink",
        main: "vodka",
        ingredients: "ingredients for vodka-drink",
        instructions: "instructions for vodka-drink"
    }
]

const tequila = [
    { 
        name: "tequila-drink",
        main: "tequila",
        ingredients: "ingredients for tequila-drink",
        instructions: "instructions for tequila-drink"
    }
]

const gin = [
    { 
        name: "gin-drink",
        main: "gin",
        ingredients: "ingredients for gin-drink",
        instructions: "instructions for gin-drink"
    }
]

const rum = [
    { 
        name: "rum-drink",
        main: "rum",
        ingredients: "ingredients for rum-drink",
        instructions: "instructions for rum-drink"
    }
]

const scotch = [
    { 
        name: "scotch-drink",
        main: "scotch",
        ingredients: "ingredients for scotch-drink",
        instructions: "instructions for scotch-drink"
    }
]


class Collection extends Component {

    handleSubmit = e => {
        e.preventDefault();
        alert('Search button works!')
    }

    render() {
        return (
            <section className="collection">
                <Cocktail />
                <OpenBrewery />
                <h3>Browse our collection</h3>
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <select id="rating-input" name="rating-input">
                        <option value={vodka}>Vodka</option>
                        <option value={tequila}>Tequila</option>
                        <option value={gin}>Gin</option>
                        <option value={rum}>Rum</option>
                        <option value={scotch}>Scotch</option>
                    </select>
                    <button type="submit" className="search-btn">Search</button>
                </form>
                <section className="results">
                    <p>{this.props.recipes}</p>
                </section>
            </section>
        );
    }
}

export default Collection;