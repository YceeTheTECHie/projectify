import React, { Component } from 'react';
import sideimg from '../../Images/work6.svg';
class CreateProject extends Component {
  state = {  }
  render() { 
      return (        
        <div className="container">
            <div className="row">
                  <div className="col-md-6">
                        <img src={sideimg} alt="logo" />     
                  </div>
                <div className="col-md-6">
                <h2>Create Project</h2>
                  <form action="" className= "form">
                 <div className="form-group">
                <label Htmlfor="title"> Title :</label>
                <input name ="title" type="text" className="form-control"/>
              </div>
                 <div className="form-group">
                <label htmlfor="content">Content:</label>
                <input name="content" type="text" className="form-control"/>
              </div>
             
              <div className="form-group">
                <label for="email">Email :</label>
                <input id="email" type="text" className="form-control"/>
              </div>
                <div className="form-group">
                <label for="password">Password :</label>
                <input id="password" type="password" className="form-control"/>
              </div>
                    <div className="form-group">
                      <input type="submit" value="submit" className="btn-primary btnn form-submit"></input>
                    </div>
            </form>
                </div>
              </div>
                      
              </div>
      

          );
  }
}

export default CreateProject;