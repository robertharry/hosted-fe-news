import React, { Component } from 'react';
import * as api from '../utils/api'
import Spinners from '../utils/spinners';
import Errors from '../utils/errors';

class User extends Component {
    state = {
        user: null,
        isLoading: true,
        error: null
    }
    render() {
        const { user, isLoading, error } = this.state
        if (error) return <Errors error={error} />
        if (isLoading) return <Spinners />
        return (
            <div className='user'>
                <h3>{user.username}</h3>
                <h4>{user.name}</h4>
                <img onError={this.addSrc} className='smallImage' src={user.avatar_url} alt='user'></img>
                <br></br>
                <button className='back' onClick={() => this.goBack()}>back</button>
            </div>
        );
    }
    componentDidMount() {
        const { user_name } = this.props
        api.fetchUserById(user_name)
            .then(user => {
                this.setState({ user, isLoading: false })
            })
            .catch(error => {
                this.setState({ error })
            })
    }
    componentDidUpdate(prevProps, prevState) {
        const {user_name} = this.props
        if (user_name !== prevProps.user_name) {
            api.fetchUserById(user_name)
                .then(user => {
                    this.setState({ user, isLoading: false })
                })
                .catch(error => {
                    this.setState({ error })
                })
        }
    }
    addSrc(ev) {
        console.log('error src')
        ev.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEXz9Pa5vsq2u8jN0dnV2N/o6u7FydPi5Onw8fS+ws3f4ee6v8v29/jY2+Hu7/Ly9PbJztbQ1dxJagBAAAAC60lEQVR4nO3b2ZaCMBREUQbDJOP//2wbEGVIFCHKTa+zH7uVRVmBBJQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCpdOzvQQqaq2KmuSrOzQ02lSeRem8rpsQq/ozg72Kj4UkAxEev8awnzs7P1yiIadsfpQXjfZCHhUCzbfmeurdNz6bDRsBWRsB+k0cXxdHjpa0wkTBn3hKnjzRZyEgYk3IeEv2RKWCt1cN9EJ0zjfm7Mq/rAVgUnbLpwnK/zA2tnuQmzJHquuqJq91blJuwmAW8rHbV3q2ITFrOAt7Xz3l2UmrBMlpcHe9fOUhOqRYVhFO/cqtSEy0H6bh/tJ1uhCctqlTB/NSnG9pOt1ISXjxLq825laVFowo9GaRPrF9talJqw3n6macaZ09yi1ISG2cLyriwePwxzi1ITru4s2naxma59TC2KTRjE83FqmQ6yeDaUDS3KTRhMV96h5TTSLD4HQ4uCE9bxePUU5pYL/3mD5o9CcMKgTONc39NNLrV5iK4aNLUoOWHQ38RQtW3nsm6db92i8ISvGBtct+hvwqyzBFxE9DehrcHlQPU1YWNvcNGirwlfNThv0ZOE9eJG1OsGZy36kVBdczU9e7RvAz5b9CFhqfIwSp4XwG+OwUWLPiRUV/33Z4tbGtTvGK635CfUDfb/SO5rt20N9t8m65fLT9g3GD5abDY2qC+lvEg4NjhEvLW4tUFvEj4a7OXq3TzoW8Jpg0PEzfk8SThv8EMeJFw1+O8SHmrQg4QHG/Qg4cEGxSc83KD4hIcblJ6w3L508TXh+vtDEpLw3GwDEpKQhOdznVD2fRr9tdpRw/1HqQndIeEvkXCXUlDC+1NBndsnge/fwyVnp9PGH3p95dm1WMKza4/fI37j+UPXR/c+2X9/hjQI0uO3LsyuMioM9A8Sjy/W1iIhY7Sn2tzpUahdWyXiNDNSxcWtSlCBAAAAAAAAAAAAAAAAAAAAAAAAAAAAwCn+AEXGNosxDBhFAAAAAElFTkSuQmCC"
    }
    goBack() {
        window.history.back()
    }
}

export default User;