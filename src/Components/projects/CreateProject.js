import React, { Component } from 'react';
import sideimg from '../../Images/work6.svg';
import {createProject} from '../../Store/Actions/projectActions';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class CreateProject extends Component {
    state = {
      title : '',
      content : ''
    }

    handleChange = e => {
      this.setState({
         [e.target.name] : e.target.value 
      })
     
    }

    submitForm = e => {
      e.preventDefault();
      this.props.createProject(this.state);
      
      this.props.history.push("/");
    }
    render() { 
      const {auth} =  this.props;
      if (!auth.uid) return <Redirect to='/signup'/>
      return (        
          <div className="container">
              <div className="row">
                    <div className="col-md-6">
                          <img src={sideimg} alt="sideimg" />     
                    </div>
                  <div className="col-md-6">
                    <div className="form-all">
                      <h2>Create Project</h2>
                      <br/>
                        <form onSubmit = {this.submitForm} className= "form">
                      <div className="form-group">
                      <br/>
                      <input
                        name ="title"
                        type="text" 
                        placeholder="Title"
                        className="form-control"
                        onChange = {this.handleChange}
                       /> 
                  
                       <br/>
                    </div>
                      <div className="form-group">
                      
                          <textarea 
                              name="content" 
                              placeholder="Content"
                              type="text" 
                              className="form-control"
                              onChange = {this.handleChange}
                          />
                          <br/>
                    </div>
                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn">
                          Create
                        </button>
                    </div>
                  </form>
                </div>
                  </div>
                </div>  
                </div>
            );
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
  createProject: (project) => dispatch(createProject(project))
  }
}

const mapStateToProps = (state) => {
  return {
    auth:state.firebase.auth
  }
}
 
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);