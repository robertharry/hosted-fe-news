import React, { Component } from 'react';
import axios from 'axios'
import {Link} from '@reach/router'

class Topics extends Component {
    state= {
        isLoading: true, 
        topics: null
    }
    render() {
        const {isLoading, topics} = this.state
        if(isLoading) return '...Loading'
        return (
            <div className='mainPage'>
                <h3>Click on a topic to see related articles</h3>
                {topics.map(topic => {
                    return <ul key={topic.slug}>
                        <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
                    </ul>
                })}
            </div>
        );
    }
    componentDidMount(){
        this.fetchAllTopics()
    }
    fetchAllTopics = () => {
        axios.get('https://robs-nc-news.herokuapp.com/api/topics')
        .then(({data}) => {
            this.setState({topics:data.topics, isLoading:false})
        })
    }
}

export default Topics;