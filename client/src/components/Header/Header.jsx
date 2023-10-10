import React, { useState, useContext } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';

export default function Header() {
    const context = useContext(UserContext);
    const [menuActive, setMenuActive] = useState(false);
    const menuClassName = menuActive ? 'menu fa-solid fa-bars active' : 'menu fa-solid fa-bars';
    return (
        <header className='header'>
            <h1>Books</h1>
            <i className={menuClassName} onClick={() => setMenuActive(prev => !prev)}></i>
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Shop</NavLink>
                    </li>
                    {
                        context.user === null &&
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/login'>Login/Register</NavLink>
                        </li>
                    }
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/cart'>Cart</NavLink>
                    </li>
                    {
                        context.user !== null && context.role === 'admin' &&
                        < li >
                            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/create'>Create</NavLink>
                        </li>
                    }
                    {
                        context.user !== null &&
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/logout'>Logout</NavLink>
                        </li>
                    }
                    <i className="menu fa-solid fa-xmark close" onClick={() => setMenuActive(prev => !prev)}></i>
                </ul>
            </nav>
        </header >
    )
}
