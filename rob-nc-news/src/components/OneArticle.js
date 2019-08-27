import React, { Component } from 'react';
import {Link} from '@reach/router'
import axios from 'axios';

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
                <p>{article.body}</p>
                <p>Votes: {article.votes}</p>
                <Link to={`/comments/${article.article_id}`}>See all comments</Link>
                <br></br>
                <Link to='/articles'>Back to all articles&nbsp;</Link>
            </div>
        );
    }
    componentDidMount(){
        this.fetchOneArticle()
    }
    fetchOneArticle = () => {
        axios.get(`https://robs-nc-news.herokuapp.com/api/articles/${this.props.article_id}`)
        .then(({data}) => {
            this.setState({article:data.article, isLoading:false})
        })
    }
}

export default OneArticle;