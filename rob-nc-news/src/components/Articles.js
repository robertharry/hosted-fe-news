import React, { Component } from 'react';
import * as api from '../utils/api'
import { Link } from '@reach/router'
import Pages from './Pages';
import Spinners from '../utils/spinners';
import Errors from '../utils/errors';
import SubmitArticle from './SubmitArticle'

class Articles extends Component {
    state = {
        body:'',
        title:'',
        topic:'football',
        sort_by: '',
        order: 'desc',
        articles: [],
        isLoading: true,
        maxPage:0,
        page:1,
        error: null
    }
    render() {
        const { articles, isLoading, page, maxPage, error, body, title, topic } = this.state
        const {username} = this.props
        if (error) return <Errors error={error}/>
        if (isLoading) return <Spinners />
        return (
            <>
                <h2>Click on an article you would like to read or post your own below...</h2>
                <SubmitArticle handleSubmit={this.handleSubmit} username={username} handleChange={this.handleChange} body={body} title={title} topic={topic} />
                <form onClick={this.handleClick}> Sort by: 
                <button  name='created_at'>Date Created</button> 
                <button name='comment_count' >Number of comments</button>
                <button name='votes' >Number of votes</button>
                </form>
            <div className='mainPage'>
                {articles.map(article => {
                    return <ul className='indvArticle' key={article.article_id}>
                        <Link className='link' to={`/articles/${article.article_id}`}>
                        <p>{article.title}</p>
                        <p>{new Date(article.created_at).toLocaleDateString()}</p>
                        <p>Comments: {article.comment_count}</p>
                        <p>Votes: {article.votes}</p>
                        </Link>
                    </ul>
                })}
            </div>
                <Pages maxPage={maxPage} pageChange={this.pageChange} page={page}/>
            </>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        const {topic} = this.props
        const {order, sort_by, page} = this.state
        if (topic !== prevProps.topic || order !== prevState.order || sort_by !== prevState.sort_by || page !== prevState.page) {
            api.fetchAllArticles(topic, order, sort_by, page)
                .then(({articles}) => {
                    this.setState({ articles, isLoading: false })
                }).catch(error => {
                    this.setState({error})
                })
        }
    }
    componentDidMount() {
        api.fetchAllArticles(this.props.topic)
            .then(({articles, total_count}) => {
                const maxPage = Math.ceil(total_count/10)
                this.setState({ articles, isLoading: false , maxPage})
            }).catch(error => {
                this.setState({error})
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
           this.setState({sort_by:event.target.name, page:1})
       }
    }
    pageChange = (amount) => {
        this.setState(({page}) => {
            return {page: page + amount}
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
        const { body, title, topic } = this.state
        const { username,} = this.props
        api.postArticle(body, username, title, topic)
            .then(article => {
                this.setState(({ articles }) => {
                    return {
                        articles: [article, ...articles],
                        body: "",
                        title: "",
                        topic: ""
                    }
                })
            }).catch(error => {
                this.setState({error})
            })
    }
}

export default Articles;