import React, { Component } from 'react';
import {Link} from '@reach/router'
import * as api from '../utils/api'
import Voting from './Voting';
import Spinners from '../utils/spinners';
import Errors from '../utils/errors';

class OneArticle extends Component {
    state = {
        voteChange: 0,
        isLoading: true,
        article: null,
        error: null
    }
    render() {
        const {isLoading, article, error} =this.state
        if(error) return <Errors error={error}/>
        if(isLoading) return <Spinners />
        return (
            <div className='indvArticle'>
                <h2>{article.title}</h2>
                <p>Author: {article.author}</p>
                <p>Topic: {article.topic}</p>
                <p>Written on: {new Date(article.created_at).toLocaleDateString()}</p>
                <p>{article.body}</p>
                <Voting votes={article.votes} article_id={article.article_id}/>
                <Link to={`/comments/${article.article_id}`}>See all comments({article.comment_count})</Link>
                <Link className="linkGap" to='/articles'>Back to all articles</Link>
            </div>
        );
    }
    componentDidMount(){
        const {article_id} = this.props
        api.fetchOneArticle(article_id)
        .then(article => {
            this.setState({article, isLoading:false})
        })
        .catch(error => {
          this.setState({error})
        })
    }
}

export default OneArticle;