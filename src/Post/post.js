import React, {Component} from 'react';
import ErrorBoundary from '../ErrorBoundary';
import config from '../config';
import './Post.css';

class Post extends Component {

    static defaultProps = {
        history: {
          push: () => { },
        },
    }

    handleSubmit = e => {
        e.preventDefault();
        const newRecipe = {
           drink_name: e.target['drink-name-input'].value,
           main_liquor: e.target['main-liquor-input'].value,
           ingredients: e.target['ingredients-input'].value,
           instructions: e.target['instructions-input'].value
        };
        console.log(JSON.stringify(newRecipe));
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
            console.log(error);
        });
    }

    render() {
        return (
            <ErrorBoundary>
                <section className="post-section">
                    <form className="post-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="drink-name" id="drink-name">Drink Name:</label>
                        <input type="text" id="drink-name-input" name="drink-name"></input>
                        <label htmlFor="main-liquor" id="main-liquor">Main Liquor:</label>
                        <select id="main-liquor-input" name="main-input">
                            <option value="Vodka">Vodka</option>
                            <option value="Tequila">Tequila</option>
                            <option value="Gin">Gin</option>
                            <option value="Rum">Rum</option>
                            <option value="Scotch">Scotch</option>
                        </select>
                        <label htmlFor="ingredients-list" id="ingredients">Ingredients:</label>
                        <textarea id="ingredients-input" className="ingredients"></textarea>
                        <label htmlFor="instructions-list" id="instructions">Instructions:</label>
                        <textarea id="instructions-input" className="instructions"></textarea>
                        <button type="submit" id="submit-btn" onClick={this.props.onClick} aria-label="Submit">Submit</button>
                    </form>
                </section>
            </ErrorBoundary>
        );
    }
}

export default Post;