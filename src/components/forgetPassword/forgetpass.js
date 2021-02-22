import React, { Component } from 'react'; 
import axios from 'axios';
import farm from '../asset/farm.jpeg';

export default class Forgetpass extends Component{

    handleSubmit= e => {
        e.preventDefault();
        const data = {
            email: this.email,
        }
        console.log(data);

    
      
     }





 
    render() {  
        return (
         
          <div className="container">
               <div className="mb-5"></div>
    
                <div className="row" style={{marginTop:"150px",height:'400px'}}>
                
                    <div className="col-md-3">
                         <img src={farm} style={{height:"100%", width:"600px"}} />
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="card " style={{height:'400px'}}>
    
                            
                            <div className="card-body">
                            <div className="mb-5"></div>
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
    
                                  
                                    
                                    <div className="mb-2"></div>
                                    <div className="form-group">
                                        <button className="btn-success form-control">Forgot Password</button>
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