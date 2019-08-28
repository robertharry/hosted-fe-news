import React, { Component } from 'react';
import * as api from '../utils/api'

class Voting extends Component {
    state = {
        article_id: this.props.article_id,
        comment_id: this.props.comment_id,
        votes: this.props.votes,
        voteChange: 0
    }
    render() {
        const {voteChange, votes} = this.state
        return (
            <div>
                <p>Votes: {votes + voteChange}</p>
                <form>
                <button onClick={this.handleClick} value={1} disabled={voteChange === 1}>Like <i className="far fa-thumbs-up"></i></button>
                <button onClick={this.handleClick} value={-1} disabled={voteChange === -1}>Dislike <i className="far fa-thumbs-down"></i></button>
                </form>
            </div>
        );
    }
    handleClick = (event) => {
        event.preventDefault()
        const {value} = event.target
        const {article_id, comment_id} = this.state
        // console.log(article_id, '<--- article', comment_id, '<-- comment')
        this.setState(({voteChange}) => {
            return {
                voteChange: voteChange + +value
            }
        })
        if(article_id){
            api.patchArticleVote(value, article_id)
        } else {
            api.patchCommentVote(value, comment_id)
        }
    }
}

export default Voting;