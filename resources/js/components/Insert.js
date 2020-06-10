import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Insert extends Component {
    constructor(){
        super();
        this.state={
            name:""
        }
    }
onc=(e)=>{
    const val=e.target.value;
    this.setState({name:val});

}
sub=e=>{
    e.preventDefault();
   axios.post('http://127.0.0.1:8000/insert',this.state)
   .then(res=>{
     

   });

}

    
    render() {
        return (
            <div>
                <form onSubmit={this.sub}>
                    <input type="text" name="name"onChange={this.onc}></input>
                    <button type="submit" >Sub</button>
                </form>
                
            </div>
        );
    }
}

export default Insert;