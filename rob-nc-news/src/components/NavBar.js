import React, { Component } from 'react';
import {Link} from '@reach/router'

class NavBar extends Component {
    render() {
        return (
            <div className='navbar'>
                <nav>
            <Link to='/'>Home</Link>
            <Link to='/articles'>Articles</Link>
            <Link to='/topics'>View all topics</Link>
                </nav>
            </div>
        );
    }
}

export default NavBar;