import React from 'react';
import {connect} from 'react-redux'
import {signOut} from '../../Store/Actions/authActions'
import { NavLink } from 'react-router-dom'
const SignedinLinks = (props) => {
    const {signOut} = props;
    return (
        <ul>     
            <li><NavLink to='/create'>Create Project</NavLink></li>
            <li><a className="link" onClick = {props.signOut}>Sign Out</a></li>
            <li><NavLink to='/'>{props.profile.initials}</NavLink></li>
        </ul>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
    signOut : () => {dispatch(signOut())}
    }
}

export default connect(null, mapDispatchToProps) (SignedinLinks) ;

                   {/* <Link to='/'className="brand-logo">Mgt-App</Link> */}
