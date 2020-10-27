import React from 'react';

import { User } from '../User';
import Link from '../ReactLink';

import './TopMenu.scss';

const TopMenu = ({user, logout, go}) => {
    return (
        <nav className="menu">
            <div className="menu__title">
                <h1>Menu</h1>
            </div>
            <div className="menu__buttons">
                <User className="menu__user" user={user}></User>
                <span> | </span>
                <Link  title='Add Event' action={() => {go('/add')}}></Link>
                <span> | </span>
                <Link  title='Logout' action={logout}></Link>
            </div>
        </nav>

    )
}

export default TopMenu