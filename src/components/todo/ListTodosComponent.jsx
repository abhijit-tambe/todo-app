import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'
// import TodoComponent from './TodoComponent.jsx'
// import axios from 'axios';
class ListTodosComponent extends Component {

  constructor(props) {
    console.log('constructor')
    super(props);
    this.state = {
      todo : [],
      message:false
    };

    this.deleteById = this.deleteById.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
    this.updateById = this.updateById.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount(){
    if(this.state.id===-1)
    return
    console.log('did mount')
    this.refreshTodos();
  }

 

  refreshTodos(){
    var username = AuthenticationService.GetLoggedInUserName();
    TodoDataService.getTodoList(username).then(response =>{
      console.log(response.data);
      this.setState({todo : response.data})
    })
  }

componentWillUnmount(){
  console.log('will unmount')
}


shouldComponentUpdate(nextProp, nextState){
  console.log('should component update')
  console.log(nextProp)
  console.log(nextState)
  return true
}


  render() {
    console.log('render')
    return (
      <>
      
        <div className="listTodosComponent">List todos </div>
        {/* <button onClick={this.goback}>go back</button> */}
       <h1>List Todos</h1>
        <div className="container">
        { this.state.message &&<div> <h1 className="alert alert-success">{this.state.message}</h1></div>}
        <table className="table">
          <thead>
            <tr>
              {/* <th>id</th> */}
              <th>Username</th>
              <th>Description</th>
              <th>TargetDate</th>
              <th>Done</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
              {
                this.state.todo.map(x=>
              <tr key={x.id}>
                {/* <td>{x.id}</td> */}
                <td>{x.username}</td>
                <td>{x.description}</td>
                <td>{moment(x.targetDate).format('MM-DD-YYYY')}</td>
                <td>{x.done.toString()}</td>
                <td><button onClick={()=> this.updateById(x.id)}className="btn btn-warning ">Update</button></td>
                <td><button onClick={()=> this.deleteById(x.id)}className="btn btn-danger ">Delete</button></td>
                {/* ()=>TodoDataService.deleteTodoById(x.username,x.id) */}
                
              </tr>
                )}
            </tbody>
        </table>
        <div><button className="btn btn-success" onClick={this.addTodo}>Add</button></div>
        </div>
      </>
    );
  }

  deleteById(id){
    var user= AuthenticationService.GetLoggedInUserName();
    // axios.delete( `http://localhost:8080/users/${n}/todos/${x}`)
    console.log(id+" "+user);
    TodoDataService.deleteTodoById(user,id).then(resp =>{
      console.log(resp);
      this.setState({message:`${id} deleted successfully`});
      this.refreshTodos();
    });
    
  }


  updateById(id){
    // var user= AuthenticationService.GetLoggedInUserName();
    // axios.delete( `http://localhost:8080/users/${n}/todos/${x}`)
    // console.log(id+" "+user);
    this.props.history.push(`/todos/${id}`);
    // TodoDataService.deleteTodoById(user,id).then(resp =>{
    //   console.log(resp);
    //   this.setState({message:`${id} deleted successfully`});
    //   this.refreshTodos();
    // });

  }


  addTodo(){
    // var user= AuthenticationService.GetLoggedInUserName();
    this.props.history.push(`/todos/-1`);
  }

}

export default ListTodosComponent