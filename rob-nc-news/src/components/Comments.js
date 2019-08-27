import React, { Component } from 'react';
import axios from 'axios'


class Comments extends Component {
    state = {
        isLoading: true,
        comments: null,
    }
    render() {
       const {isLoading, comments} = this.state
        if(isLoading) return '...Loading'
        return (
            <div>
                <h2>comments</h2>
            </div>
        );
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
}

export default Comments;