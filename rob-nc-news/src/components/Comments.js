import React, { Component } from 'react';
import * as api from '../utils/api'


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
                    return <ul className='indvComment' key={comment.comment_id}>
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
            api.fetchOneArticle(this.props.article_id)
            .then(article => {
                this.setState({article, isLoading:false})
            })
        }
    }
    componentDidMount() {
        api.fetchAllComments(this.props.article_id)
        .then(comments => {
            this.setState({comments, isLoading:false})
        })
    }
}

export default Comments;