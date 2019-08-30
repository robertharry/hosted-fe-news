import React from 'react';
import { Link } from '@reach/router'

const NavBar = () => {
    return (
        <div>
            <nav className='navbar1'>
                <Link className='navbar' to='/'>Home&nbsp;</Link>
                <Link className='navbar' to='/articles'>Articles&nbsp;</Link>
                <Link className='navbar' to='/topics'>Topics&nbsp;</Link>
            </nav>
        </div>
    )
}

export default NavBar;