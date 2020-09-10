import React, {Component} from 'react';
import ErrorBoundary from '../ErrorBoundary';
import config from '../config';
import './Collection.css';


class Collection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
        }
    }

    //fetch request to BottomsUp API, search by main liquor
    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            results: [],
        });
        const main_liquor = e.target['main-input'].value;
        fetch(`${config.API_ENDPOINT}/collections?main_liquor=${main_liquor}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong. Please try again.');
                }
                return response.json();
            })
            .then(data => {
                this.setState({
                    results: [
                        ...data
                    ]
                });
            })
            .catch(error => {
                console.error({ error });
            });
    }

    render() {
        return (
            <ErrorBoundary>
                <section className="collection">
                    <section className="collection-search-section">
                    <h3 className="browse">Browse our collection</h3>
                        <form className="main-search-form" onSubmit={this.handleSubmit}>
                            <select id="main-input" name="main-input">
                                <option value="Vodka">Vodka</option>
                                <option value="Tequila">Tequila</option>
                                <option value="Gin">Gin</option>
                                <option value="Rum">Rum</option>
                                <option value="Scotch">Scotch</option>
                            </select>
                            <button type="submit" id="search-btn" onClick={this.props.onClick} aria-label="Submit">Search</button>
                        </form>
                        <section className="results">
                            <div>{this.state.results.map((result) => (
                                <div key={result.drink_name} className="collection-search-result">
                                    <div>
                                        <h4>Drink Name:</h4> {result.drink_name}
                                    </div>
                                    <div>
                                        <h4>Main Liquor:</h4> {result.main_liquor}
                                    </div>
                                    <div>
                                        <h4>Ingredients:</h4> {result.ingredients}
                                    </div>
                                    <div>
                                        <h4>Instructions:</h4> {result.instructions}
                                    </div>
                                </div>
                            ))}</div>
                        </section> 
                    </section>
                </section>
            </ErrorBoundary>
        );
    }
}

export default Collection;