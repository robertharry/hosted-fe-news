import React, { Component } from 'react';
import * as api from '../utils/api'
import Voting from './Voting';
import Spinners from '../utils/spinners';
import Errors from '../utils/errors';


class Comments extends Component {
    state = {
        body: "",
        isLoading: true,
        comments: null,
        article: null,
        error: null
    }
    render() {
        const { isLoading, comments, article, body, error } = this.state
        const {username} = this.props
        if (error) return <Errors error={error}/>
        if (comments === null || article === null) return <Spinners />
        if (isLoading) return <Spinners />
        return (
            <div>
                <h2>Comments for {article.title}</h2>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <label>Post a comment as '{username}' here:</label>
                    <br></br>
                    <textarea rows="3" cols="50" type="text" name="body" onChange={this.handleChange} value={body}/>
                    <br></br>
                    <button className="submit" type="submit" disabled={body.length === 0}> Submit </button>
                </form>
                {comments.map(comment => {
                    return <ul className='indvComment' key={comment.comment_id}>
                        <p>{comment.body}</p>
                        <p>Author: {comment.author}</p>
                        <Voting votes={comment.votes} comment_id={comment.comment_id}/>
                        {username === comment.author && <button onClick={() => this.removeComment(comment.comment_id)}>DELETE</button>}
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
            }).catch(error => {
                this.setState({error})
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
        const { body } = this.state
        const { username, article_id } = this.props
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
    removeComment = (comment_id) => {
        api.deleteComment(comment_id)
            .then(() => {
                this.setState(({comments}) => {
                    return {comments: comments.filter(comment => comment.comment_id !== comment_id)}
                })
            })

    }
}

export default Comments;