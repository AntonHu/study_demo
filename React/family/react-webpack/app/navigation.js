import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css'
const NavBar=()=>(
    <div>
        <NavLink exact className="blue" to="/">main page</NavLink> |&nbsp;
        <NavLink to="/first">first page</NavLink> |&nbsp;
        <NavLink activeClassName="active" to="/second/123/321">second page</NavLink> |&nbsp;
        <NavLink to="/react">404</NavLink> |&nbsp;
        <NavLink to="/redirect">Redirect</NavLink>
    </div>
);

export default NavBar;