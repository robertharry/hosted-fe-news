import React from 'react';

const SubmitForm = ({username, body, handleChange, handleSubmit}) => {
    return (
        <div>
                <form onSubmit={handleSubmit}>
                    <label>Post a comment as '{username}' here:</label>
                    <br></br>
                    <input className="inputBox" type="text" name="body" value={body} onChange={handleChange} placeholder="Enter comment here..." ></input>
                    <br></br>
                    <button className="submit" type="submit" disabled={body.length === 0}> Submit </button>
                </form>
            </div>
    );
};

export default SubmitForm;