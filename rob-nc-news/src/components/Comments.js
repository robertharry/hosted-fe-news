import React, { Component } from 'react';
import {Link} from '@reach/router';
import * as api from '../utils/api'
import Voting from './Voting';
import Spinners from '../utils/spinners';
import Errors from '../utils/errors';
import SubmitForm from './SubmitForm';
import Pages from './Pages';


class Comments extends Component {
    state = {
        body: "",
        isLoading: true,
        comments: null,
        article: null,
        maxPage:0,
        page:1,
        error: null
    }
    render() {
        const { isLoading, comments, article, error, body, maxPage, page } = this.state
        const {username} = this.props
        if (error) return <Errors error={error}/>
        if (comments === null || article === null) return <Spinners />
        if (isLoading) return <Spinners />
        const articleSnippet = article.body.slice(0,200)
        return (
            <>
            <Link to={`/articles/${article.article_id}`}>
            <div className='indvArticle'>
                <h4>Comments for '{article.title}' by '{article.author}'</h4>
                <p>"{articleSnippet} ..."</p>
            </div>
            </Link>
                <SubmitForm handleSubmit={this.handleSubmit} username={username} handleChange={this.handleChange} body={body}/>
                <div className="mainPage">
                {comments.map(comment => {
                    return <ul className='indvComment' key={comment.comment_id}>
                        <p>{comment.body}</p>
                        <p>Author: {comment.author}</p>
                        <Voting votes={comment.votes} comment_id={comment.comment_id}/>
                        {username === comment.author && <button className="delete" onClick={() => this.removeComment(comment.comment_id)}>DELETE</button>}
                    </ul>
                })}
            </div>
                <Pages maxPage={maxPage} pageChange={this.pageChange} page={page}/>
            </>
        );
    }
    componentDidMount() {
        api.fetchAllComments(this.props.article_id)
            .then(comments => {
                this.setState({ comments, isLoading: false })
            })
        api.fetchOneArticle(this.props.article_id)
            .then(article => {
                const maxPage = Math.ceil(article.comment_count/10)
                this.setState({ article, isLoading: false, maxPage})
            }).catch(error => {
                this.setState({error})
              })
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.state.page !== prevState.page){
            api.fetchAllComments(this.props.article_id, this.state.page)
            .then(comments => {
                this.setState({ comments, isLoading: false }) 
            })
        }
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
    pageChange = (amount) => {
        this.setState(({page}) => {
            return {page: page + amount}
        })
    }
}

export default Comments;