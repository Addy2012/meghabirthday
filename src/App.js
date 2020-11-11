import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login';
import data from './data.js';
import {Questions} from './Questions/Questions';
import {Greetings} from './Greetings/Greetings';
import { Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
      isHovering: false
    };
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
          <Route path='/meghabirthday' exact render={() => <Login loginData={data.login}/>}/>
          <Route path='/question' render={() => <Questions pointChange={this.pointChange} questionData={data.questions} pointMark={this.state.points}/> } />
          <Route path='/greeting' render={() => <Greetings /> } />
        </Switch>
      </div>
    );
  }
  
}

export default App;
