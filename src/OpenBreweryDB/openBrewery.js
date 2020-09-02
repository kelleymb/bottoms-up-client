import React, {Component} from 'react';
import './OpenBrewery.css';

class OpenBrewery extends Component {

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
        const postalCode = e.target["postal-code"].value;
        const url = `https://api.openbrewerydb.org/breweries?by_postal=${postalCode}`;
        fetch(url, {
            "method": "GET"
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Something went wrong, please try again later.');
            }
            return response.json();
        })
        .then(data => {
            if (data.length < 1) {
                throw new Error(`Oops! There are no results for ${postalCode}. Please try again.`);
            } else {
                this.setState({
                    results: [
                        ...data,
                    ],
                });  
            }
        })
        .catch(err => {
            this.setState({
              error: err.message
            });
        });
    }

    render() {
        return (
            <section className="open-brewery-db">
                <section className="info">
                    <p>Need a break?</p> 
                    <p>Search your local breweries courtesy of <a href="https://www.openbrewerydb.org/" rel="noreferrer noopener" target="_blank">Open Brewery API</a></p>
                </section>
                <section className="open-brewery-db-form">
                    <h4>Search by Postal Code</h4>
                    <form className="search-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="postal-code" id="postal-label" aria-required="true">Enter valid 5 digit code</label>
                        <input required type="text" id="postal-code" name="postal-code"></input>
                        <button type="submit" id="submit">Submit</button>
                    </form>
                    <section className="results">
                        {this.state.results.map((result) => (
                            <div className="result">
                                <p>Name: {result.name}</p>
                                <p>Postal Code: {result.postal_code}</p>
                                <p>State: {result.state}</p>
                                <p>Phone: {result.phone}</p>
                                <p>Website: {result.website_url}</p>
                            </div>
                        ))}
                    </section>
                </section>
            </section>
        );
    }
}

export default OpenBrewery;