import React from 'react';
import { Link } from '@reach/router'

const NavBar = () => {
    return (
        <div>
            <nav className='navbar1'>
                <Link className='navbar' to='/'>Home</Link>
                <Link className='navbar' to='/articles'>Articles</Link>
                <Link className='navbar' to='/topics'>Topics</Link>
            </nav>
        </div>
    )
}

export default NavBar;