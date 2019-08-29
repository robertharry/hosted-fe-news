import React, { Component } from 'react';
import { Link } from '@reach/router'
import * as api from '../utils/api'
import Spinners from '../utils/spinners';
import Errors from '../utils/errors';

class Topics extends Component {
    state = {
        isLoading: true,
        topics: null,
        error:null
    }
    render() {
        const { isLoading, topics, error } = this.state
        if (error) return <Errors error={error}/>
        if (isLoading) return <Spinners />
        return (
            <>
                <h3>Click on a topic to see related articles</h3>
            <div className='mainPage'>
                {topics.map(topic => {
                    return <ul className='topic' key={topic.slug}>
                        <Link className="link" to={`/topics/${topic.slug}`}>
                       <h2>{topic.slug}</h2> 
                        </Link>
                    </ul>
                })}
            </div>
            </>
        );
    }
    componentDidMount() {
        api.fetchAllTopics()
            .then(topics => {
                this.setState({ topics, isLoading: false })
            }).catch(error => {
                console.log('topic error')
                this.setState({error})
            })
    }
}

export default Topics;