import React, { Component } from 'react';
import axios from 'axios'
import { Link } from '@reach/router'

class Articles extends Component {
    state = {
        articles: [],
        isLoading: true
    }
    render() {
        const { articles, isLoading } = this.state
        if (isLoading) return '....Loading' /*loading spinner? */
        return (
            <div className='mainPage'>
                <h2>Click on an article you would like to read...</h2>
                {articles.map(article => {
                    return <ul key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
                    </ul>
                })}
            </div>
        );
    }
    componentDidUpdate(prevProps){
        if(this.props.topic !== prevProps.topic){
            this.fetchAllArticles()
        }
    }
    componentDidMount() {
        this.fetchAllArticles()
    }
    fetchAllArticles = () => {
        axios.get('https://robs-nc-news.herokuapp.com/api/articles',{
            params: {
                topic: this.props.topic
            }
        })
            .then(({ data }) => {
                this.setState({ articles: data.articles, isLoading: false })
            })
    }

}

export default Articles;