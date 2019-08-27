import React, { Component } from 'react';
import {Link} from '@reach/router'
import * as api from '../utils/api'

class OneArticle extends Component {
    state = {
        isLoading: true,
        article: null
    }
    render() {
        const {isLoading, article} =this.state
        if(isLoading) return <p>Loading</p>
        return (
            <div>
                <h2>{article.title}</h2>
                <p>Author: {article.author}</p>
                <p>Topic: {article.topic}</p>
                <p>Written on: {article.created_at}</p>
                <p>{article.body}</p>
                <p>Votes: {article.votes}</p>
                <Link to={`/comments/${article.article_id}`}>See all comments({article.comment_count})</Link>
                <br></br>
                <Link to='/articles'>Back to all articles&nbsp;</Link>
            </div>
        );
    }
    componentDidMount(){
        api.fetchOneArticle(this.props.article_id)
        .then(article => {
            this.setState({article, isLoading:false})
        })
    }
}

export default OneArticle;