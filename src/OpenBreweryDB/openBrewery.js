import React, {Component} from 'react';
import ErrorBoundary from '../ErrorBoundary';
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
            if (data.length === 0) {
                alert(`Oops! There are no results for ${postalCode}. Please try again.`);
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
            <ErrorBoundary>
               <section className="open-brewery-db">
                    <section className="info">
                        <p>Need a break?</p> 
                        <p>Search your local breweries courtesy of <a className="brewery-link" href="https://www.openbrewerydb.org/" rel="noreferrer noopener" target="_blank">Open Brewery API</a></p>
                    </section>
                    <section className="open-brewery-db-form">
                        <h4 className="search-hdr">Search by Postal Code</h4>
                        <form className="search-form" onSubmit={this.handleSubmit}>
                            <label htmlFor="postal-code" id="postal-label" aria-required="true">Enter valid 5 digit code</label>
                            <input required type="text" id="postal-code" name="postal-code"></input>
                            <button type="submit" id="submit-bttn" onClick={this.props.onClick} aria-label="Submit">Submit</button>
                        </form>
                        <section className="results">
                            {this.state.results.map((result) => (
                                <div key={result.name} className="result">
                                    <h4 className="name-hdr">Name:</h4> <p className="result-text">{result.name}</p>
                                    <h4 className="postal-hdr">Postal Code:</h4> <p className="result-text">{result.postal_code}</p>
                                    <h4 className="state-hdr">State:</h4> <p className="result-text">{result.state}</p>
                                    <h4 className="phone-hdr">Phone:</h4> <p className="result-text">{result.phone}</p>
                                    <h4 className="website-hdr">Website:</h4> <p className="result-text"><a className="website" href={result.website_url}>{result.website_url}</a></p>
                                </div>
                            ))}
                        </section>
                    </section>
                </section> 
            </ErrorBoundary>
        );
    }
}

export default OpenBrewery;