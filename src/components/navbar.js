import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <li>
                <Link to='/'>And That's On What?</Link>
            </li>
            <li>
                <Link to='/'>Extra Extra Read On</Link>
            </li>
            <li>
                <Link to='/'>This do be broken</Link>
            </li>
            
        </div>
    );
}

export default NavBar