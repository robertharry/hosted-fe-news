import React, { Component } from 'react';
import { Link, navigate } from '@reach/router'
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
        const { isLoading, article, error } = this.state
        const { username } = this.props
        if (error) return <Errors error={error} />
        if (isLoading) return <Spinners />
        return (
            <div className='indvArticle'>
                <h2>{article.title}</h2>
                <p>Author: <Link to={`/user/${article.author}`} >{article.author}</Link></p>
                <p>Topic: {article.topic}</p>
                <p>Written on: {new Date(article.created_at).toLocaleDateString()}</p>
                <p className="articleFontSize">{article.body}</p>
                <Voting votes={article.votes} article_id={article.article_id} />
                {username === article.author && <button className="delete" onClick={() => this.removeArticle(article.article_id)}>DELETE</button>}
                <br></br>
                <Link to={`/comments/${article.article_id}`}>See all comments({article.comment_count})</Link>
                <br></br>
                <Link to='/articles'>Back to all articles</Link>
            </div>
        );
    }
    componentDidMount() {
        const { article_id } = this.props
        api.fetchOneArticle(article_id)
            .then(article => {
                this.setState({ article, isLoading: false })
            })
            .catch(error => {
                this.setState({ error })
            })
    }
    removeArticle(article_id) {
        api.deleteArticle(article_id)
            .then(() => {
                navigate('/articles')
            }).catch(error => {
                this.setState({ error })
            })
    }
}

export default OneArticle;