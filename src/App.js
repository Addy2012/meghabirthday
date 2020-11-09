import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login';
import data from './data.js';
import {Questions} from './Questions/Questions';
import {Greetings} from './Greetings/Greetings';
import { Route, Switch, Link } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {points: 0};
  }
  someMethod=(pageNumber)=>{
    data.parentPageNumber = data.login.pageNumber;
    if(data.parentPageNumber===2){
      console.log("if condition satisfied")
      return <Link to='/question' />
    }
    else if(data.parentPageNumber===3){
      console.log("else if condition satisfied")
      return <Link to='/greeting' />
    }
    else{
      return <Link to='/' />
    }
  }
  pointChange=()=>{
    this.setState({
      points:this.state.points+1
    },function(){
      console.log("Point chenges "+this.state.points)
    })
  }
  
  render(){
    return (
      <div className="App">
        <Switch>
          <Route path='/meghabirthday' exact render={() => <Login loginData={data.login} parentMethod={this.someMethod} />}/>
          <Route path='/question' render={() => <Questions pointChange={this.pointChange} questionData={data.questions} pointMark={this.state.points}/> } />
          <Route path='/greeting' render={() => <Greetings /> } />
        </Switch>
      </div>
    );
  }
  
}

export default App;
