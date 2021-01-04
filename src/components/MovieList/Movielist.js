import React, { Component } from 'react'
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';


class MovieList extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }
    
    getMovieDetails = (movieId) => {
        this.props.dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: movieId });
        this.props.history.push('/movie-details')
    }

    render() {
        return (
            <div>
                {this.props.movies.map(movie =>
                    <MovieItem
                        key={movie.id}
                        movie={movie}
                        // passed through from app because it needs access to the App props
                        getMovieDetails={this.getMovieDetails}
                    />
                )}
            </div>
        )
    }
}


const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieList);