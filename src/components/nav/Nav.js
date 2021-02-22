import axios from 'axios';
import React, { Component } from 'react'; 
import { NavLink } from 'react-router-dom';
import {Link} from "react-router-dom";

export default class Dashboard extends Component{
 
  
    handleLogout = () => {
        localStorage.clear();
        this.props.setUser(null);
    }


render() { 
    let buttons;
    if(this.props.user){
        buttons =(
        <ul className="navbar-nav my-2 my-lg-0">
            <li className="nav-item active">
                 <Link className="nav-link" to={'/'} onClick={this.handleLogout }>logout</Link>
            </li>
              
        </ul>
        )
    }else{
        buttons =(
            <ul className="navbar-nav my-2 my-lg-0">
                <li className="nav-item active">
                <Link className="nav-link" to={'/login'}>login </Link>
               </li>
                <li className="nav-item">
                    <Link className="nav-link" to={'/register'}>Register</Link>
                </li>
            </ul>
     
        )
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to={'/'}>Auth Testing</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
        <ul className="navbar-nav my-2 my-lg-0">
             {buttons}
          </ul>
        </ul>
       
      </div>
    </nav>

    )

  
}
}


