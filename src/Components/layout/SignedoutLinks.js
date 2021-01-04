import React from 'react';
import { NavLink } from 'react-router-dom'
const SignedOutLinks = () => {
    return (
        <ul class="navlink">
            <li><NavLink to='/signin'>Sign In</NavLink></li>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
        </ul>
    );
}
 
export default SignedOutLinks;