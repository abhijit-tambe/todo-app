import React,{Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
  
  class LoginComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "abhijit",
        password: "",
        hasLoginFailed: false,
        showSuccessMessage: false
      };
  
      this.change = this.change.bind(this);
      this.loginClick = this.loginClick.bind(this);
    }

    loginClick() {
      // if (this.state.username === "abhijit" && this.state.password === "tambe") {
      //  AuthenticationService.registerSucessfullLogin(this.state.password);
      //   // console.log(this.state);
      //   // console.log(this.props.history.location.pathname);
      //   let a = this.state.username;
      //   this.props.history.push("/welcome/" + a);
      //   this.setState({
      //     showSuccessMessage: true,
      //     hasLoginFailed: false
      //   });
      // }
      // // console.log('invalid');
      // else
      //   this.setState({
      //     showSuccessMessage: false,
      //     hasLoginFailed: true
      //   });

        // AuthenticationService.executeBasicAuthenticationService(this.state.username,this.state.password)
        // .then((res)=>{
        //   AuthenticationService.registerSucessfullLogin(this.state.username,this.state.password);
        // console.log(res);
        // let a = this.state.username;
        // this.props.history.push(`/welcome/${a}`);
        // this.setState({
        //   showSuccessMessage: true,
        //   hasLoginFailed: false
        // });
        // }).catch(
        //   ()=>{
        //     console.log('invalid')
        //     this.setState({
        //       showSuccessMessage: false,
        //       hasLoginFailed: true
        //     });
        //   }
        // )




        AuthenticationService.executeJwtAuthenticationService(this.state.username,this.state.password)
        .then((res)=>{
          AuthenticationService.registerSucessfullLoginForJwt(this.state.username, res.data.token);
        console.log(res.data.token);
        let a = this.state.username;
        this.props.history.push(`/welcome/${a}`);
        this.setState({
          showSuccessMessage: true,
          hasLoginFailed: false
        });
        }).catch(
          ()=>{
            console.log('invalid')
            this.setState({
              showSuccessMessage: false,
              hasLoginFailed: true
            });
          }
        )

    }
  
    change(event) {
      // console.log(this.state);
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    render() {
      return (
        <div><h1>Login</h1>
        <div className="container">
          {/* <div>Invalid Credentials</div> */}
          {/* <Loginfail hasloginfailed={this.state.hasLoginFailed}/> */}
          {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid credentials</div>}
          {/* <div>Login Sucessful</div> */}
          {/* <LoginSucess showsuccessmessage={this.state.showSuccessMessage} /> */}
          {this.state.showSuccessMessage && <div >Login Sucessful</div>}
          Username:{" "}
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.change}
          />
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.change}
          />
          <button className="btn btn-lg btn-primary" onClick={this.loginClick}>Login</button>
        </div>
        </div>
      );
    }
  
  
  
  
  
  
   
  
    //   changePassword = (event) =>{
    //     //   console.log(event.target.value);
    //       this.setState({
    //           password:event.target.value
    //       });
    //   }
  }

  export default LoginComponent 