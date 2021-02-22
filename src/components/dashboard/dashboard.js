import axios from 'axios';
import React, {Component} from 'react';


export default class Dashboard extends Component {
    state = {};
    componentDidMount(){

        const config = {
            headers: {
               Authorization :'Bearer' .concat(localStorage.getItem('token'))
             }
        }
    
        axios.get('user',config).then(
            res => {
                this.setState({
                    user:res.data
                });
            },
            err=>{
                console.log(err)
            }
        )
    }

    render() {

      


        return (
            <div className="welcome">
                <div className="mb-5"></div>
                <h2>You are welcome </h2>
            </div>
           
        )
    }

}