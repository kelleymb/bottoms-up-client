import React, {Component} from 'react';
import OpenBrewery from '../OpenBreweryDB/OpenBrewery';
import './Collection.css'

class Collection extends Component {
    render() {
        return (
            <>
                <OpenBrewery />
                <section>
                    <h2></h2>
                </section>
            </>
        );
    }
}

export default Collection;