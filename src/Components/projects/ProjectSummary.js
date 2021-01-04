import React from 'react';
import './projects.css'
const ProjectSummary = ({project}) => {
    console.log(project.authorlastName);
    return (
        
        <div class="container">
        <div class="card-deck">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{project.title}</h5>
              <p class="card-text"><small class="text-muted">Created by <span className = "pr"> {project.authorFirstName} {project.authorLastName}</span></small></p>
            </div>
          </div>
        </div>
        </div>
    );
}
 
export default ProjectSummary;

