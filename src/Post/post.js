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

    updateDrinkName(drink_name) {
        this.setState({drink_name: {value: drink_name, touched: true}  })
    }

    updateMainLiquor(main_liquor) {
        this.setState({main_liquor: {value: main_liquor, touched: true}  })
    }

    updateIngredients(ingredients) {
        this.setState({ingredients: {value: ingredients, touched: true}  })
    }

    updateInstructions(instructions) {
        this.setState({instructions: {value: instructions, touched: true}  })
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

    //POST request to BottomsUp API on form submit
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
                    <form aria-label="Post Liquor Recipe" className="post-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="drink-name" id="drink-name">Drink Name:</label>
                        <input required aria-required type="text" id="drink-name-input" name="drink-name" onChange={e => this.updateDrinkName(e.target.value)}></input>
                        {this.state.drink_name.touched && (
                            <ValidationError message={drinkNameError}/>
                        )}
                        <label htmlFor="main-liquor" id="main-liquor">Main Liquor:</label>
                        <select required aria-required id="main-liquor-input" name="main-input" onChange={e => this.updateMainLiquor(e.target.value)}>
                            <option value="">Please choose a liquor</option>
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
                        <textarea required aria-required id="ingredients-input" className="ingredients" onChange={e => this.updateIngredients(e.target.value)}></textarea>
                        {this.state.ingredients.touched && (
                            <ValidationError message={ingredientsError}/>
                        )}
                        <label htmlFor="instructions-list" id="instructions">Instructions:</label>
                        <textarea required aria-required id="instructions-input" className="instructions" onChange={e => this.updateInstructions(e.target.value)}></textarea>
                        {this.state.instructions.touched && (
                            <ValidationError message={instructionsError}/>
                        )}
                        <button 
                            type="submit" 
                            id="submit-btn" 
                            onClick={this.props.onClick} 
                            aria-label="Submit" 
                            disabled={
                                this.validateDrinkName() ||
                                this.validateMainLiquor() ||
                                this.validateIngredients() ||
                                this.validateInstructions()
                            }>
                        Submit
                        </button>
                    </form>
                </section>
            </ErrorBoundary>
        );
    }
}

export default Post;