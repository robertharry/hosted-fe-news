import React from 'react';

const LoginBar = (props) => {
    const {username, handleChange} = props
    return (
        <>
            <p className="usernameLog"> Logged in as '{username}' </p>
            <form className="username">
            Choose user from dropdown list:
      <select value={username} onChange={handleChange}>
                    <option value="jessjelly">jessjelly</option>
                    <option value="happyamy2016">happyamy2016</option>
                    <option value="cooljmessy">cooljmessy</option>
                </select>
            </form>
        </>
    );
};

export default LoginBar;