import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Navbar from '../src/Components/layout/Navbar'
import Dashboard from './Components/dashboard/Dashboard';
import ProjectDetails from './Components/projects/ProjectDetails'
import CreateProject from './Components/projects/CreateProject';
import SignUp from  './Components/auth/SignUp'; 
import SignIn from  './Components/auth/SignIn'; 
const App = () => {
    return (  
    <BrowserRouter> 
    <Navbar/>
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/project/:id' component={ProjectDetails} />
        <Route path='/create'component={CreateProject} />
        <Route path='/signup'component={SignUp} />
        <Route path='/signin'component={SignIn} />
    </Switch>
    </BrowserRouter>
    );
}
 
export default App;