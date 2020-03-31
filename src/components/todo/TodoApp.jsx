import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderComponent from './HeaderComponent'
import AuthenticationRoute from './AuthenticationRoute.jsx'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import WelcomeComponent from './WelcomeComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import TodoComponent from './TodoComponent'


class TodoApp extends Component {
  render() {
 return (
      <div className="TodoApp">
        {/* <p>My to do hello</p> */}
        <Router>
          <>
          <HeaderComponent/>
            <Switch >
              <Route  path="/" exact component={LoginComponent}></Route>
              <Route path="/login" component={LoginComponent}></Route>
              <AuthenticationRoute path="/welcome/:name" component={WelcomeComponent}/>
              <AuthenticationRoute path="/todos/:id" component={TodoComponent}/>
              <AuthenticationRoute path="/todos" component={ListTodosComponent} />
              <AuthenticationRoute path="/logout" component={LogoutComponent}/>
              
              <Route component={ErrorComponent}/>
            </Switch>
            <FooterComponent/>
          </>
        </Router>
        {/* <LoginComponent/>
         <WelcomeComponent/> */}
         
      </div>
    );
  }
}

// function clicked(by) {
//     console.log("clicked" + by);
//   }
// function Loginfail(props){
//     if(props.hasloginfailed)
//     return  <div>Invalid Credentials</div>
//     else return null
// }

// function LoginSucess(props){
//     if(props.showsuccessmessage)
//     return  <div>Login sucessful</div>
//     else return null
// }

function ErrorComponent() {
  return <div>An Error Occured</div>;
}
// goback(){
//   console.log(this.props.goback);
// }

export default TodoApp;
