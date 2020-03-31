import React, { Component } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from '../todo/AuthenticationService.js'

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      description: '',
      targetDate: moment(new Date()).format("YYYY-MM-DD")
    };


    this.onSubmit=this.onSubmit.bind(this)
    this.validate=this.validate.bind(this)
  }


  componentDidMount(){
      var name = AuthenticationService.GetLoggedInUserName();
      TodoDataService.getTodo(name,this.state.id).then(res=>{
          console.log(res);
          this.setState({
              description : res.data.description,
              targetDate: moment(res.data.targetDate).format('YYYY-MM-DD')
          })
      });
  }

  onSubmit (values){
    //   let errors={description:'s'}
    console.log(values);
    var user = AuthenticationService.GetLoggedInUserName();
    let data = {
        id:this.state.id,
        description:values.description,
        targetDate:values.targetDate,
    }
    if(this.state.id===-1){
    TodoDataService.createTodo(user,data).then(res=>{
        console.log(res);
        this.props.history.push(`/todos`);
    });
    }else{
    TodoDataService.updateTodo(user,this.state.id,data).then(res=>{
        console.log(res);
        this.props.history.push(`/todos`);
    });
    }
    // return errors
    }

    validate(values){
        let error = {}
        if(!values.description){
            error.description='Enter a Description'
        }else if(values.description.length<5){
            error.description='Description minimum length is 5 '
        }

        if(!moment(values.targetDate).isValid()){
            error.targetDate='Enter valid Target Date'
        }


        // console.log(error);
        return error
    }

  render() {
    // var description = this.state.description;
    // var targetDate = this.state.targetDate;
    var {description,targetDate} = this.state;

    return (
        
      <div className="container">
        <h1>Todo</h1>
        
        <div className="container">
          Todo Component {this.props.match.params.id}
        </div>
        <Formik initialValues={{
            description,
            targetDate
        }} 
        onSubmit ={this.onSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        validate={this.validate}
        enableReinitialize={true}
        >{(props) => 
        <Form>
            <ErrorMessage name="description" component="div" className="alert alert-warning"/>
            <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
            <fieldset className="from-group">
                <label>Description</label>
                <Field className="form-control" type="text" name="description"></Field>
            </fieldset>
            <fieldset className="from-group">
                <label>Tareget Date</label>
                <Field className="form-control" type="date" name="targetDate"></Field>
            </fieldset>
            <button type="submit" className="btn btn-primary">save</button>
        </Form>}
        </Formik>
      </div>
    );
  }
}

export default TodoComponent;
