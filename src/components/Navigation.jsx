import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';

function Navigation() {
    return (
        <header>
            <div className="logo">
                <h1>Blog example</h1>
            </div>
            <nav>
                <ul className="menu">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link to="/albums">Albums</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
