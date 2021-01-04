import React from 'react';
import {Redirect,NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import moment from 'moment' 

import {firestoreConnect} from 'react-redux-firebase'
// import '../../css/loader.css'
import {compose} from 'redux'
const ProjectDetails = (props) => {
    console.log(props)
    const {project,auth} = props;
    if (!auth.uid) return <Redirect to="/signin"/>
    if (project){
        return (
    <React.Fragment>    
        <div  class="container"><br/>
        <div class="card-deck">
          <div class="card">
              <div class="card-body">
              <h5 class="card-title">{project.title}</h5>
              <p class="card-text">{project.content}</p>
              <p class="card-text"><small class="text-muted">created by <span className="pr">{project.authorFirstName} {project.authorLastName}</span></small> 
              <br/>
              <small class="text-muted">Last Seen : <span className="pr">{moment(project.createdAt.toDate()).calendar()}</span></small></p>
                          
            </div>
          </div>
        </div>
        </div> 
        <NavLink to ='/'>Go back</NavLink>
            
    </React.Fragment>
        )
    }
    else{
        return (
            <div class="fancy-spinner">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="dot"></div>
          </div>           
        );
    }
    
}
    const mapStateToProps = (state, ownProps) => {
        const id = ownProps.match.params.id;
        const projects = state.firestore.data.projects;
        const project = projects ? projects[id] : null;
        return {
        auth:state.firebase.auth,
        project: project
        }
}


 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ]))(ProjectDetails)
