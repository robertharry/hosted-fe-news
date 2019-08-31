import React, { Component } from 'react';
import * as api from '../utils/api'
import Spinners from '../utils/spinners';
import Errors from '../utils/errors';

class User extends Component {
    state= {
        user:null,
        isLoading: true,
        error: null
    }
    render() {
        const {user, isLoading, error} = this.state
        if(error) return <Errors error={error} />
        if(isLoading) return <Spinners />
        return (
            <div className='user'>
                <h3>{user.username}</h3>
                <h4>{user.name}</h4>
                <img className='smallImage' src={user.avatar_url} alt='user'></img>
                <br></br>
                <button className='back' onClick={() => this.goBack()}>back</button>
            </div>
        );
    }
    componentDidMount() {
        const {user_name} = this.props
        api.fetchUserById(user_name)
        .then(user => {
            this.setState({user, isLoading:false})
        })
        .catch(error => {
          this.setState({error})
        })
    }
    goBack() {
        window.history.back()
    }
}

export default User;