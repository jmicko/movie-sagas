import React, { Component } from 'react'
import MovieItem from '../MovieItem/MovieItem';


export default class MovieList extends Component {

    componentDidMount(){
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
