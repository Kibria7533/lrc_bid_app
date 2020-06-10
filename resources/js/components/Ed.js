import React, { Component } from 'react';

class Ed extends Component {
    constructor(){
        super();
        this.state={
            id:"",
            name:""
        }
    }
    componentDidMount() {
        const id=this.props.match.params.id;
        axios.get(`https://asadt.herokuapp.com/edit/${id}`)
            .then(response => {
                console.log(response.data[0].name);
                this.setState({ name: response.data[0].name ,id:response.data[0].id});
            })
            .catch(error => {
                console.log('d');
            })
    }
    onc=e=>{
        const name=e.target.value;
        this.setState({name:name});
        
    }

    sub=e=>{
        e.preventDefault();
        axios.post('https://asadt.herokuapp.com/editinsert',this.state)
        .then(res=>{
        
     
        });
       
    
    }
    render() {
        return (
            <div>
            <form onSubmit={this.sub}>
                <input type="text" value={this.state.name} name="name" onChange={this.onc}></input>
                <button type="submit" >Sub</button>
            </form>
            
        </div>
        );
    }
}

export default Ed;