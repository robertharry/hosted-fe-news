import React, { Component } from 'react';

class SubmitForm extends Component {
    render() {
  
        const {username, body, handleChange} = this.props
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>Post a comment as '{username}' here:</label>
                    <br></br>
                    {/* <textarea rows="3" cols="50" type="text" name="body" onChange={handleChange} value={body}/> */}
                    <input className="inputBox" type="text" name="body" value={body} onChange={handleChange}  ></input>
                    <br></br>
                    <button className="submit" type="submit" disabled={body.length === 0}> Submit </button>
                </form>
            </div>
        );
    }
}

export default SubmitForm;

/* <form onSubmit={this.handleSubmit}>
                    <label>Post a comment as '{username}' here:</label>
                    <br></br>
                    <textarea rows="3" cols="50" type="text" name="body" onChange={this.handleChange} value={body}/>
                    <br></br>
                    <button className="submit" type="submit" disabled={body.length === 0}> Submit </button>
                </form> */