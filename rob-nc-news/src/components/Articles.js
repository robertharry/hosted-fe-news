import React, { Component } from 'react';
import * as api from '../utils/api'
import { Link } from '@reach/router'

class Articles extends Component {
    state = {
        sort_by: '',
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
                <form onClick={this.handleClick}> Sort by: <button name='created_at'>Date Created</button> 
                <button name='comment_count' >Number of comments</button>
                <button name='votes' >Number of votes</button></form>
                {articles.map(article => {
                    return <ul /*className='indvArticle'*/ key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}>
                        <p>{article.title}</p>
                        <p>{new Date(article.created_at).toLocaleDateString()}</p>
                        <p>Comments: {article.comment_count}</p>
                        <p>Votes: {article.votes}</p>
                        </Link>
                    </ul>
                })}
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        const {topic} = this.props
        const {order, sort_by} = this.state
        if (topic !== prevProps.topic || order !== prevState.order || sort_by !== prevState.sort_by) {
            api.fetchAllArticles(topic, order, sort_by)
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
    handleClick = (event) => {
        event.preventDefault()
       if(this.state.sort_by === event.target.name){
           if(this.state.order === 'asc'){
               this.setState({order:'desc'})
           }else {
               this.setState({order:'asc'})
           }
       } else {
           this.setState({sort_by:event.target.name})
       }
    }
}

export default Articles;