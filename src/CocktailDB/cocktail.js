import React, {Component} from 'react';
import ErrorBoundary from '../ErrorBoundary';
import './Cocktail.css';

class Cocktail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            results: [],
        });
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
            this.setState({
                results: [ 
                    ...this.state.results, data
                ], 
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
            <ErrorBoundary>
               <section className="cocktail-db">
                    <section className="info">
                        <p>Not sure what you want?</p> 
                        <p>Generate a recipe at random courtesy of <a href="https://www.thecocktaildb.com/" rel="noreferrer noopener" target="_blank">Cocktail DB API</a></p>
                    </section>
                    <form className="cocktail-db-api" onSubmit={this.handleSubmit}>
                        <button type="submit" id="random" name="random" onClick={this.props.onClick} aria-label="Submit">Generate random drink!</button>
                    </form>    
                    <section className="api-result">
                        <div className="result">
                            {this.state.results.map((res) => (
                                <div key={res.drinks[0].strDrink} className="cocktail-result-block">
                                    <img id="cocktail-img" alt="cocktail" src={res.drinks[0].strDrinkThumb}></img>
                                    <h4 className="drink-name">Drink name:</h4> <p className="text">{res.drinks[0].strDrink}</p>
                                    <h4 className="glass">Glass:</h4> <p>{res.drinks[0].strGlass}</p>
                                    <div>
                                        <h4 className="ingredients">Ingredients:</h4> 
                                        <p className="text">{res.drinks[0].strMeasure1}  {res.drinks[0].strIngredient1}</p>
                                        <p className="text">{res.drinks[0].strMeasure2}  {res.drinks[0].strIngredient2}</p>
                                        <p className="text">{res.drinks[0].strMeasure3}  {res.drinks[0].strIngredient3}</p>
                                        <p className="text">{res.drinks[0].strMeasure4}  {res.drinks[0].strIngredient4}</p>
                                        <p className="text">{res.drinks[0].strMeasure5}  {res.drinks[0].strIngredient5}</p>
                                        <p className="text">{res.drinks[0].strMeasure6}  {res.drinks[0].strIngredient6}</p> 
                                        <p className="text">{res.drinks[0].strMeasure7}  {res.drinks[0].strIngredient7}</p>
                                        <p className="text">{res.drinks[0].strMeasure8}  {res.drinks[0].strIngredient8}</p>
                                        <p className="text">{res.drinks[0].strMeasure9}  {res.drinks[0].strIngredient9}</p>
                                        <p className="text">{res.drinks[0].strMeasure10} {res.drinks[0].strIngredient10}</p>
                                        <p className="text">{res.drinks[0].strMeasure11} {res.drinks[0].strIngredient11}</p>
                                    </div>
                                    <div>
                                    <h4 className="instructions">Instructions:</h4>
                                        <p className="text">{res.drinks[0].strInstructions}</p> 
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </section> 
            </ErrorBoundary>
            
        );
    }
}

export default Cocktail;