import React, { Component } from 'react';
import { Link } from '@reach/router'
import * as api from '../utils/api'

class Topics extends Component {
    state = {
        isLoading: true,
        topics: null
    }
    render() {
        const { isLoading, topics } = this.state
        if (isLoading) return '...Loading'
        return (
            <div className='mainPage'>
                <h3>Click on a topic to see related articles</h3>
                {topics.map(topic => {
                    return <ul key={topic.slug}>
                        <Link to={`/topics/${topic.slug}`}>
                       <h2>{topic.slug}</h2> 
                        </Link>
                    </ul>
                })}
            </div>
        );
    }
    componentDidMount() {
        api.fetchAllTopics()
            .then(topics => {
                this.setState({ topics, isLoading: false })
            })
    }
}

export default Topics;