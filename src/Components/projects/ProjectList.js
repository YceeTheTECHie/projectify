import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom'
const ProjectList = ({projects}) => {

    return ( 
   <React.Fragment>
        {projects && projects.map(project => {
            return (
                <Link to={"/project/" + project.id}>
                    <ProjectSummary  project={project} key ={project.id}/>
                 </Link>
                 )
        
        })}           
    </React.Fragment>
     )

    } 
export default ProjectList;

