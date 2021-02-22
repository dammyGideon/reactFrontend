import React, { Component } from 'react'; 
import axios from 'axios';
import farm from '../asset/farm.jpeg';
import { Redirect } from 'react-router-dom';

export default class Login extends Component{
  state={}

    handleSubmit= e => {
        e.preventDefault();
    
        const data = {
            email:this.email,
            password:this.password,
        }


        axios.post('login',data)
        .then(
            res=>{
             localStorage.setItem('token',res.data.token)
              this.setState({
                  loggedIn:true
              });
              this.props.setUser(res.data.user);
            } 
        ).catch(
            err => {
               console.log(err);
               
            }
        )
      
    }


render() {  
    if(this.state.loggedIn){
        return <Redirect to={'/'} />;
    }
    return (
     
      <div className="container">
           <div className="mb-5"></div>

            <div className="row" style={{marginTop:"150px"}}>
            
                <div className="col-md-5">
                     <img src={farm} style={{height:"100%", width:"600px"}} />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <div className="card ">

                        
                        <div className="card-body">
                        <h4 className="card-title">
                          Hello, Welcome Back
                          </h4>
                         <h6>Join over 20,000 customers from around Nigeria</h6>
                        
                            <form onSubmit={this.handleSubmit}>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                   
                                    <input type="email" class="form-control" placeholder="Email"
                                       onChange={e => this.email = e.target.value}
                                    />
                                </div>

                                <div className="form-group">
                                     <label htmlFor="password">Password</label>
                                     <input type="Password"
                                     class="form-control" placeholder="password"
                                     onChange={e => this.password = e.target.value}
                                     />
                                </div>
                                <a className="nav-link" href="forgot-password">Forgot Password</a>
                                <div className="mb-2"></div>
                                <div className="form-group">
                                    <button className="btn-success form-control">Login</button>
                                </div>
                                <div className="form-group">
                                <i class="fa fa-google" aria-hidden="true"></i>  <button className="btn-grey form-control">Continue with Google</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>

                
            </div>
           
      </div>
    )
}
}


