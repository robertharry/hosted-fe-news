import React from 'react';

const Errors = (props) => {
    if (props.default) return <h2>Invalid path!</h2>
    const { status, data: { msg } } = props.error.response
    return (
        <div>
            <h2> Error: {status} {msg}</h2>
        </div>
    );
};

export default Errors