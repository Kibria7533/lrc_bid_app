import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink,Switch } from "react-router-dom";
import Home from './Home';
import Insert from './Insert';
import Ed from './Ed';


class  Example extends Component {
    render(){
        return (
            <BrowserRouter>
            <div>
              
                  <NavLink activeStyle={{color:"black"}} exact to="/home">Home</NavLink>
                  <NavLink  activeStyle={{color:"black"}} exact to="/add">Add data</NavLink>
             
                

               <Switch> 
                    <Route exact path="/home" component={Home}/>
                    <Route  exact path="/add" component={Insert}/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/edit/:id" component={Ed}/>
                    
                   </Switch>              
                </div> 
            </BrowserRouter>
            
        );
    }
    
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
