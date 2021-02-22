import axios from 'axios';
import React, {Component} from 'react';


export default class Home extends Component {
    
   
    render() {

        if(this.props.user){
            return(
                <h2>
                    {this.props.user.name} you are now login 
                </h2>
            )
        }
       
            return (
                <h2>You are not logged in</h2>
             )
        


       
    }

}