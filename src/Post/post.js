import React, {Component} from 'react';
import ErrorBoundary from '../ErrorBoundary';
import ValidationError from './ValidationError';
import config from '../config';
import './Post.css';

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drink_name: {
               value: '',
               touched: false 
            },
            main_liquor: {
                value: '',
                touched: false 
            },
            ingredients: {
                value: '',
                touched: false 
            },
            instructions: {
                value: '',
                touched: false 
            } 
        };
    }

    static defaultProps = {
        history: {
          push: () => { },
        },
    }

    validateDrinkName() {
        const drink_name = this.state.drink_name.value.trim();
        if (drink_name.length === 0) {
            return 'Drink name is required.';
        }
    }

    validateMainLiquor() {
        const main_liquor = this.state.main_liquor.value.trim();
        if (main_liquor.length === 0) {
            return 'Main liquor is required.';
        }
    }

    validateIngredients() {
        const ingredients = this.state.ingredients.value.trim();
        if (ingredients.length === 0) {
            return 'Ingredients are required.';
        }
    }

    validateInstructions() {
        const instructions = this.state.instructions.value.trim();
        if (instructions.length === 0) {
            return 'Instructions are required.';
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const newRecipe = {
           drink_name: e.target['drink-name-input'].value,
           main_liquor: e.target['main-liquor-input'].value,
           ingredients: e.target['ingredients-input'].value,
           instructions: e.target['instructions-input'].value
        };
        fetch(`${config.API_ENDPOINT}/postrecipe`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(newRecipe),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Something went wrong. Please try again.');
            }
            return response.json();
        })
        .then(() => {
            alert(`Thank you! Your recipe has been successfully posted!`);
            this.props.history.push('/collections');
        })
        .catch(error => {
            console.error({ error });
        });
    }

    render() {
        const drinkNameError = this.validateDrinkName();
        const mainLiquorError = this.validateMainLiquor();
        const ingredientsError = this.validateIngredients();
        const instructionsError = this.validateInstructions();

        return (
            <ErrorBoundary>
                <section className="post-section">
                    <form className="post-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="drink-name" id="drink-name">Drink Name:</label>
                        <input type="text" id="drink-name-input" name="drink-name"></input>
                        {this.state.drink_name.touched && (
                            <ValidationError message={drinkNameError}/>
                        )}
                        <label htmlFor="main-liquor" id="main-liquor">Main Liquor:</label>
                        <select id="main-liquor-input" name="main-input">
                            <option value="Vodka">Vodka</option>
                            <option value="Tequila">Tequila</option>
                            <option value="Gin">Gin</option>
                            <option value="Rum">Rum</option>
                            <option value="Scotch">Scotch</option>
                        </select>
                        {this.state.main_liquor.touched && (
                            <ValidationError message={mainLiquorError}/>
                        )}
                        <label htmlFor="ingredients-list" id="ingredients">Ingredients:</label>
                        <textarea id="ingredients-input" className="ingredients"></textarea>
                        {this.state.ingredients.touched && (
                            <ValidationError message={ingredientsError}/>
                        )}
                        <label htmlFor="instructions-list" id="instructions">Instructions:</label>
                        <textarea id="instructions-input" className="instructions"></textarea>
                        {this.state.instructions.touched && (
                            <ValidationError message={instructionsError}/>
                        )}
                        <button type="submit" id="submit-btn" onClick={this.props.onClick} aria-label="Submit">Submit</button>
                    </form>
                </section>
            </ErrorBoundary>
        );
    }
}

export default Post;