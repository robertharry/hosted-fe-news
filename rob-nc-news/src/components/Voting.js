import React, { Component } from 'react';
import * as api from '../utils/api'

class Voting extends Component {
    state = {
        article_id: this.props.article_id,
        votes: this.props.votes,
        voteChange: 0
    }
    render() {
        const {voteChange, votes} = this.state
        return (
            <div>
                <p>Votes: {votes + voteChange}</p>
                <form>
                <button onClick={this.handleClick} value={1} disabled={voteChange === 1}>Like!</button>
                <button onClick={this.handleClick} value={-1} disabled={voteChange === -1}>Dislike!</button>
                </form>
            </div>
        );
    }
    handleClick = (event) => {
        event.preventDefault()
        const {value} = event.target
        const {article_id} = this.state
        this.setState(({voteChange}) => {
            return {
                voteChange: voteChange + +value
            }
        })
        api.patchVote(value, article_id)
    }
}

export default Voting;