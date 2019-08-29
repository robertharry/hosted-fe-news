import React from 'react';

const Errors = (props) => {
    console.log(props.error, '<-- this error')
    return (
        <div>
            Page not found!
        </div>
    );
};

export default Errors