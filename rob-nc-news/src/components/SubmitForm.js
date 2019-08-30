import React, { Component } from 'react';

class SubmitForm extends Component {
    render() {
  
        const {username, body, handleChange} = this.props
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>Post a comment as '{username}' here:</label>
                    <br></br>
                    <input className="inputBox" type="text" name="body" value={body} onChange={handleChange} placeholder="Enter comment here..." ></input>
                    <br></br>
                    <button className="submit" type="submit" disabled={body.length === 0}> Submit </button>
                </form>
            </div>
        );
    }
}

export default SubmitForm;