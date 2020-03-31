import React, {Component} from 'react'
import { Link } from "react-router-dom";
import HelloWorldServices from '../../api/todo/HelloWorldService.js'
// import { ErrorMessage } from 'formik';

class WelcomeComponent extends Component {
  constructor(){
    super()
    this.state={
      welcomeMessage:''
    }

    this.getCustomMessage = this.getCustomMessage.bind(this)
  }
    render() {
      return (
        <>
        <h1>Welcome!</h1>
          <div className="container">
            Welcome {this.props.match.params.name} you can manage your todos <Link to="/todos" >here</Link>
          </div>
          <div className="container">
            Welcome  you can manage your todos {this.state.welcomeMessage}
            <button onClick={this.getCustomMessage}>click me</button> 
            {/* <Link to="/listtodo" >here</Link> */}
          </div>
          {/* <button onClick={this.goback}>go back</button> */}
        </>
      );
    }

    // retriveWelcomeMessage(){
      
    // }

    getCustomMessage(){
      console.log("custom message");
      
      HelloWorldServices.executeHelloService(this.props.match.params.name)
      .then(Response =>{
        console.log(Response);
        this.setState(()=>{
         return { welcomeMessage:Response.data.name}
        });
      }).catch(er=>{
        let errorMessage='';
        if(er.message){
          errorMessage=er.message;
          if(er.message&& er.message.data){
            errorMessage=er.message.data;
          }
        }
        console.log(errorMessage);
      })
      //.catch()
     
    }
  }

  export default WelcomeComponent