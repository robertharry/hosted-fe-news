import React, {Component} from 'react';
import {Link} from '@reach/router';
import * as api from '../utils/api';
import Spinners from '../utils/spinners';
import Errors from '../utils/errors';

class LoginBar extends Component {
    state = {
        users:[],
        isLoading: true,
        error: null
    }
    render(){
        const { username, handleChange } = this.props
        const {users, isLoading, error} = this.state
        if (error) return <Errors />
        if (isLoading) return <Spinners />
        return (
            <>
            <p className="usernameLog">Logged in as: <Link to={`/user/${username}`} >{username}</Link></p> 
                <form className="username">
                    Choose user from dropdown list:
          <select value={username} onChange={handleChange}>
            {users.map(user => {
                return <option key={user.username} value={user.username}>{user.username}</option>
            })}
                    </select>
                </form>
            </>
        );
    }
    componentDidMount(){
        api.fetchAllUsers()
        .then(users => {
            this.setState({users, isLoading:false})
        })
        .catch(error => {
            this.setState({error})
        })
    }
};

export default LoginBar;