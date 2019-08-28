import React, { Component } from 'react';
import * as api from '../utils/api'


class Comments extends Component {
    state = {
        username: "jessjelly",
        body: "",
        isLoading: true,
        comments: null,
        article: null
    }
    render() {
        const { isLoading, comments, article } = this.state
        if (article === null) return <p>Loading</p>
        if (isLoading) return <p>Loading</p>
        return (
            <div>
                <h2>Comments for {article.title}</h2>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <label>Post a comment as "username" here:<input type="text" name="body" onChange={this.handleChange} /></label>
                    <button className="submit" type="submit"> Submit </button>
                </form>
                {comments.map(comment => {
                    return <ul className='indvComment' key={comment.comment_id}>
                        <p>{comment.body}</p>
                        <p>Author: {comment.author}</p>
                        <p>Votes: {comment.votes}</p>
                        <button onClick={() => this.removeComment(comment.author, comment.comment_id)}>DELETE</button>
                    </ul>
                })}

            </div>
        );
    }
    componentDidMount() {
        api.fetchAllComments(this.props.article_id)
            .then(comments => {
                this.setState({ comments, isLoading: false })
            })
        api.fetchOneArticle(this.props.article_id)
            .then(article => {
                this.setState({ article, isLoading: false })
            })
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const { username, body } = this.state
        const { article_id } = this.props
        api.postComment(username, body, article_id)
            .then(comment => {
                this.setState(({ comments }) => {
                    return {
                        comments: [comment, ...comments],
                        body: ""

                    }
                })
            })
    }
    removeComment = (author, comment_id) => {
        api.deleteComment(comment_id)
            .then(() => {
                this.setState(({comments}) => {
                    return {comments: comments.filter(comment => comment.comment_id !== comment_id)}
                })
            })

    }
}

export default Comments;