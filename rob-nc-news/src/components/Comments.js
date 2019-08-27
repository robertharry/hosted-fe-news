import React, { Component } from 'react';
import axios from 'axios'


class Comments extends Component {
    state = {
        isLoading: true,
        comments: null,
        article: null
    }
    render() {
        const {isLoading, comments, article} = this.state
        if(article === null) return <p>Loading</p>
        if(isLoading) return <p>Loading</p>
        return (
            <div>
                <h2>Comments for {article.title}</h2>
                <br></br>
                {comments.map(comment => {
                    return <ul key={comment.comment_id}>
                    <p>{comment.body}</p>
                    <p>Author: {comment.author}</p>
                    <p>Votes: {comment.votes}</p>
                    </ul>
                })}

            </div>
        );
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.comments !== this.state.comments){
            this.fetchOneArticle()
        }
    }
    componentDidMount() {
        this.fetchAllComments()
    }
    fetchAllComments = () => {
        axios.get(`https://robs-nc-news.herokuapp.com/api/articles/${this.props.article_id}/comments`)
            .then(({ data }) => {
                this.setState({comments:data.comments, isLoading:false})
            })
    }
    fetchOneArticle = () => {
        axios.get(`https://robs-nc-news.herokuapp.com/api/articles/${this.props.article_id}`)
        .then(({data}) => {
            // console.log(data, 'data')
            this.setState({article:data.article, isLoading:false})
        })
    }
}

export default Comments;