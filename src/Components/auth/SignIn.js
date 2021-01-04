import React, { Component } from 'react';
import signinimg from '../../Images/signin-image.jpg';
import { connect } from 'react-redux'
import {signIn }from '../../Store/Actions/authActions'
import './authstyles.css'
import {NavLink, Redirect} from 'react-router-dom'

class SignIn extends Component {
    state = {
        email : '',
        password : ''
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.signin(this.state)
    }

    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state);
    }
    render() { 
        const {authError,auth} = this.props;
        const msg = "Email or password incorrect";
        if (auth.uid) return <Redirect to='/'/>
        return (
        <React.Fragment>
            <div className=" container ">
            <div className="row">
                <div className="col-sm top col-md col-lg col-xl">
                            <h2 style = {{fontFamily:'Montserrat',paddingRight: '2em',marginTop:'2em'}}>Sign Up</h2>   <br/>
                    <h6 style = {{marginLeft:'4em', color:'red'}}>{authError ? msg : null}</h6>
                    <form onSubmit = {this.handleSubmit} className="register-form">
                         <div className="form-group">
                             <label for="email"><i className="zmdi zmdi-email"></i></label>
                             <input type="email" name="email" id="email" placeholder="Your Email" onChange={this.handleChange}/>
                         </div>
                         <div className="form-group">
                             <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                             <input type="password" name="password" id="pass" placeholder="Password" onChange={this.handleChange}/>
                         </div>
                       
                        <div className="form-group form-button">
                             <input type="submit" name="signup" id="signup" className="form-submit" value="Log in"/>
                    
                     </div>

                     <NavLink to ='/signup' className="signup-image-link">Not a member?</NavLink>

                    </form>
                </div>
                
                <div className="signup-image col-sm col-md col-lg col-xl">
                    
                        <img  className= "img-fluid"src={signinimg} alt="sign up"/>
                   
                </div>
            </div>

            
        </div>
       
        </React.Fragment>
    
        );
    }
}
const mapStateToProps = (state) => {
    return {
        authError : state.auth.authError,
        auth:state.firebase.auth
    }
}  

const mapDispatchToProps = (dispatch) => {
return {
    signin: (Credentials) => dispatch(signIn(Credentials))
}
}

export default connect (mapStateToProps,mapDispatchToProps) (SignIn);
