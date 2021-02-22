
import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Nav from './components/nav/Nav';

import Forgetpass from './components/forgetPassword/forgetpass';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/dashboard';
import axios from 'axios';

export default class App extends Component {

  state = {};
  componentDidMount =()=>{

       
          
    axios.get('user').then(
        res => {
          this.setUser(res.data.user)
        },
        err=>{
            console.log(err)
        }
    )
}

setUser = user =>{
  this.setState({
    user:user
  });
}

  render() {
    

    return (
      
   
    
      <BrowserRouter>

      <div className="App">
       
        <Nav user={this.state.user} setUser={this.setUser} />

        <div className="mb-5"></div> <br/>
          <Switch>
          <Route exact path="/" component={()=>< Home user={this.state.user} />} />  
          <Route exact path="/login" component={()=> <Login setUser={this.setUser}/>} />
           <Route exact path="/register" component={Register}/>
           <Route exact path="/forgot-password" component={Forgetpass}/>
           <Route exact path="/dashboard" component={Dashboard} />
         </Switch>


         <div className="auth-wrapper">
            <div style={{textAlign:'center'}}>
               
            </div>
        </div>

      </div> 
    </BrowserRouter>


   
        
    

    
    
    );
  }
 
}


