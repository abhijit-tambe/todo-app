import React, {Component} from 'react'
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component{
    //Define the initial state in a Constructor
    constructor(){
      super(); //Error 1
      this.state={
        counter:0
        // secondCounter:50
      }
      this.increment = this.increment.bind(this) 
      // or arrow functions for changing state
      // this.decrement = this.decrement.bind(this)
    }
  
  render(){
    return(
  <div className="counter">
    <CounterButton by={1}incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <CounterButton by = {5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      {/* <CounterButton by = {5} decrementMethod={this.decrement}/> */}
      <CounterButton by = {10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <CounterButton by = {50} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <CounterButton by = {100} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      
      <div> <span className="count">{this.state.counter}</span></div>
    <div><button className="reset"onClick={this.reset}>reset</button></div>
  </div>
    );
  }

  reset =()=>{
    this.setState(()=>{
      return { counter:0 }
    }
    )
  }

  increment (by){// update state counter++
    console.log('increment from parent');
    // this.state.counter++;
    //  = this.state.counter+1}
    this.setState((preSt)=>{
      return {counter: preSt.counter + by,}
      // secondCounter: this.state.secondCounter+1
    });
  }

  decrement = (by)=>{
    console.log('decrement');
    this.setState((preSt)=>{
      return {counter: preSt.counter - by}
    });
  }
  
}


class CounterButton extends Component{


  // constructor(){
    // super(); //Error 1
  //   this.state={
  //     counter:0
  //     // secondCounter:50
  //   }
    // this.increment = this.increment.bind(this) 
  //   // or arrow functions for changing state
  //   // this.decrement = this.decrement.bind(this)
  // }
    render  (){
      // const sty = {fontSize:"10px", padding:"30px 30px"};
      return(
        <div className="counterButton">
          {/* <p>counter</p> */}
      <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
      {/* <span className="count" style={sty}>{this.state.counter}</span>  */}
      <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
      {/* <span className="count">{this.state.secondCounter}</span> */}
        </div>
      );     
    }

    
  

  // increment () {
  //   // update state counter++
  //   console.log('increment from child');
  //   // this.state.counter++;
  //   //  = this.state.counter+1}
  //   // this.setState((prevState)=>{
  //   //   return {counter: prevState.counter + this.props.by,}
  //   //   // secondCounter: this.state.secondCounter+1
  //   // });
  //   this.props.incrementMethod(this.props.by);
  // }

  // decrement  =()=>{
  //   console.log('decrement from child');
  //   // this.setState((prevState)=>{
  //   //   return {counter: prevState.counter - this.props.by}
  //   // });
  //   this.props.decrementMethod(this.props.by);
  // }
}
  Counter.propTypes ={
    by : PropTypes.number
  }
  Counter.defaultProps={
    by:1
  }
  export default Counter ;


  
  