import React from 'react';

const SubmitArticle = ({username, body, handleChange, handleSubmit, title, topic}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <label>Post a comment as '{username}' here:</label>
                    <br></br>
                    <label>Choose a topic: </label>
                    <select name="topic" onChange={handleChange}>
                        <option>football</option>
                        <option>cooking</option>
                        <option>coding</option>
                    </select>
                    <input className="inputBox" type="text" name="title" value={title} onChange={handleChange} placeholder="Title..." ></input>
                    <br></br>
                    <input className="inputBox" type="text" name="body" value={body} onChange={handleChange} placeholder="Enter article body here..." ></input>
                    <br></br>
                    <button className="submit" type="submit" disabled={body.length === 0 || title.length === 0}> Submit </button>
                </form>
        </div>
    );
};

export default SubmitArticle;