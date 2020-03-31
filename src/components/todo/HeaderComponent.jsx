import React, {Component}from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router'
import AuthenticationService from './AuthenticationService.js'
class HeaderComponent extends Component{
    render(){
      const islog = AuthenticationService.isUserLoggedIn();
      console.log(islog);
      return(
        
        <header>
          <nav className="navbar navbar-dark bg-dark navbar-expand-md">
            <div><a href ="http://www.abhijittambe.com"className="navbar-brand">abhijit tambe</a></div>
            <ul className="navbar-nav">
              {islog && <li ><Link className="nav-link" to="/welcome/:name">Home</Link></li>}
              {islog &&<li ><Link className="nav-link" to="/todos">todos</Link></li>}
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
             {!islog && <li ><Link className="nav-link" to="/login">Login</Link></li>}
              {islog && <li ><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
            </ul>
          </nav>
        </header>
      );
    }
  }

  export default withRouter(HeaderComponent)