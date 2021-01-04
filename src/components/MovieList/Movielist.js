import React, { Component } from 'react'

export default class Movielist extends Component {

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
