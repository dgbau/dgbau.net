import React from 'react';
import './Nav.scss';

function Nav() {
    return (
        <div className="header">
            <ul className="menu">
                <li className="menu-item">About Me</li>
                <li className="menu-item">Projects</li>
                <li className="menu-item">Recipes</li>
                <li className="menu-item">Images</li>
                <li className="menu-item">Sound</li>
                <li className="menu-item">CV</li>
                <li className="menu-item">Contact</li>
            </ul>
        </div>
    );

}


export default Nav;