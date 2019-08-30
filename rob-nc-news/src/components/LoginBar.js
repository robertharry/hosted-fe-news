import React from 'react';

const LoginBar = (props) => {
    const { username, handleChange } = props
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

// import React, { Component } from 'react';
// import * as api from '../utils/api'

// class LoginBar extends Component {
//     state={
//         user:null,
//         isLoading: true
//     }
//     render() {
//         if(this.state.isLoading) return <p>loading....</p>
//         return (
//             <div>
//                 <img src={this.state.user.avatar_url}></img>
//             </div>
//         );
//     }
//     componentDidMount(){
//         api.fetchUserById('jessjelly')
//         .then(user => {
//             this.setState({user, isLoading: false})
//         })
//     }
// }

// export default LoginBar;