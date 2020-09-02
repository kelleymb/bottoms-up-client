import React, {Component} from 'react';
import Cocktail from '../CocktailDB/Cocktail';
import OpenBrewery from '../OpenBreweryDB/OpenBrewery';
import './Collection.css';

class Collection extends Component {
    render() {
        return (
            <>
                <Cocktail />
                <OpenBrewery />
                <section>
                    <h2></h2>
                </section>
            </>
        );
    }
}

export default Collection;