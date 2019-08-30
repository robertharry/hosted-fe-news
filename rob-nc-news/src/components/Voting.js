import React, { Component } from 'react';
import * as api from '../utils/api'

class Voting extends Component {
    state = {
        voteChange: 0
    }
    render() {
        const {voteChange} = this.state
        const {votes} = this.props
        return (
            <div>
                <p>Votes: {votes + voteChange}</p>
                <form>
                <button onClick={this.handleClick} value={1} disabled={voteChange === 1}>Like</button>
                <button onClick={this.handleClick} value={-1} disabled={voteChange === -1}>Dislike</button>
                </form>
            </div>
        );
    }
    handleClick = (event) => {
        event.preventDefault()
        const {value} = event.target
        const {article_id, comment_id} = this.props
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