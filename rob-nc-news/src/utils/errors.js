import React from 'react';

const Errors = (props) => {
    if (props.default) return <h2>Invalid path!</h2>
    const { status, data: { msg } } = props.error.response
    return (
        <div>
            <h2> Error: {status} {msg}</h2>
            <img className="image" src="https://images.unsplash.com/photo-1521716250348-c4ae4ff1df43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="burning news"></img>
        </div>
    );
};

export default Errors