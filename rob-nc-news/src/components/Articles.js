import React, { Component } from 'react';
import * as api from '../utils/api'
import { Link } from '@reach/router'

class Articles extends Component {
    state = {
        order: 'desc',
        articles: [],
        isLoading: true
    }
    render() {
        const { articles, isLoading } = this.state
        if (isLoading) return '....Loading' /*loading spinner? */
        return (
            <div className='mainPage'>
                <h2>Click on an article you would like to read...</h2>
                <h3> Sort by: <button onClick={this.handleDateClick}>Date Created</button></h3>
                {articles.map(article => {
                    return <ul key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}>
                        <p>{article.title}</p>
                        <p>{article.created_at}</p>
                        <p>{article.comment_count}</p>
                        </Link>
                    </ul>
                })}
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.topic !== prevProps.topic || this.state.order !== prevState.order) {
            api.fetchAllArticles(this.props.topic, this.state.order)
                .then(articles => {
                    this.setState({ articles, isLoading: false })
                })
        }
    }
    componentDidMount() {
        api.fetchAllArticles(this.props.topic)
            .then(articles => {
                this.setState({ articles, isLoading: false })
            })
    }
    handleDateClick = (event) => {
        event.preventDefault()
        if(this.state.order === 'desc'){
            this.setState({order:'asc'})
        } else  {
            this.setState({order: 'desc'})
        }
    }
}

export default Articles;