import React, {Component} from 'react';
import './Post.css'

class Post extends Component {

    handleSubmit = e => {
        e.preventDefault();
        alert('Search button works!')
    }

    render() {
        return (
            <section className="post-section">
                <form className="post-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="drink-name" id="drink-name">Drink Name:</label><br/>
                    <input type="text" id="drink-name-input" name="drink-name"></input><br/>
                    <label htmlFor="main-liquor" id="main-liquor">Main Liquor:</label><br/>
                    <input type="text" id="main-liquor-input" name="main-liquor"></input><br/>
                    <label htmlFor="ingredients-list" id="ingredients">Ingredients:</label><br/>
                    <textarea className="ingredients"></textarea><br/>
                    <label htmlFor="instructions-list" id="instructions">Ingredients:</label><br/>
                    <textarea className="instructions"></textarea>
                </form>
            </section>
        );
    }
}

export default Post;