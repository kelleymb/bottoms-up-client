import React, {Component} from 'react';
import './Cocktail.css'
import OpenBrewery from '../OpenBreweryDB/OpenBrewery';

class Cocktail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
        fetch(url, {
            "method": "GET" 
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Something went wrong. Please try again.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            this.setState({
                results: [
                    ...data,
                ]  
            });
        })
        .catch(err => {
            this.setState({
              error: err.message
            });
        });

    }



    render() {

        return (
            <section className="cocktail-db">
                <section className="info">
                    <p>Not sure what you want? Generate a recipe at random courtesy of <a href="https://www.thecocktaildb.com/" target="_blank">Cocktail DB API</a></p>
                </section>
                <form className="cocktail-db-api" onSubmit={this.handleSubmit}>
                    <button type="submit" id="random" name="random">Generate random drink!</button>
                </form>    
                <section className="api-result">
                    <div className="result">
                        {this.state.results}
                    </div>
                </section>
            </section>
        );
    }
}

export default Cocktail;