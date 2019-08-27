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
                <h4> Sort by: <button name='created_at' onClick={this.handleClick}>Date Created</button> 
                <button name='comment_count' onClick={this.handleClick}>Number of comments</button>
                <button name='votes' onClick={this.handleClick}>Number of votes</button></h4>
                {articles.map(article => {
                    return <ul key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}>
                        <p>{article.title}</p>
                        <p>{article.created_at}</p>
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