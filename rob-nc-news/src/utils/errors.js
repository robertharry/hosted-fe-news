import React from 'react';

const Errors = (props) => {
    if (props.default) return (
    <div>
        <h2>Invalid URL!</h2>
        <img className="image" src="https://images.unsplash.com/photo-1522292923399-bf8ddbd6e4e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="end of the road"></img>
    </div>
    )
    const { status, data: { msg } } = props.error.response
    return (
        <div>
            <h2> Error: {status} {msg}</h2>
            <img className="image" src="https://images.unsplash.com/photo-1521716250348-c4ae4ff1df43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="burning news"></img>
        </div>
    );
};

export default Errors