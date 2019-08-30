import React from 'react';

const LoginBar = (props) => {
    return (
        <>
            <p className="usernameLog"> Logged in as '{props.username}' </p>
            <form className="username">
            Choose user from dropdown list:
      <select value={props.username} onChange={props.handleChange}>
                    <option value="jessjelly">jessjelly</option>
                    <option value="happyamy2016">happyamy2016</option>
                    <option value="cooljmessy">cooljmessy</option>
                </select>
            </form>
        </>
    );
};

export default LoginBar;