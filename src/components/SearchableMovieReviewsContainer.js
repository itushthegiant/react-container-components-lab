import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'oS8bhFLvmDOaheKVFkbnSQQKFP7orz7e';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }


    handleChange = (event) => {
        this.setState({
            ...this.state,
            searchTerm: event.target.value
        })
    }




    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            reviews: data.results
        }))
    }


    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <label>
                    Search:
                    <input type="search" placeholder='Search...' onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
                </form>
                 <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
