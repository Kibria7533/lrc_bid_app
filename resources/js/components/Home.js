import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('https://asadt.herokuapp.com/show')
            .then(response => {

                this.setState({ data: response.data });
            })
            .catch(error => {
                console.log('d');
            })
    }
    del=(e)=>{
        const id=e.target.value;
        axios.delete(`https://asadt.herokuapp.com/delete/${id}`)
        .then(res=>{
            const dt=this.state.data.filter(item=>item.id!=id);
            this.setState({data:dt});
        })


    }
    
    render() {
        return (
            <div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">delete</th>
                            <th scope="col">Update</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        
                            {this.state.data.map(item => {
                                return (
                                    
                                        <tr key={item.id}>
                                        <td >{item.id}</td>
                                        <td>{item.name}</td>
                                        <td><button value={item.id} onClick={this.del}>Delete</button></td>
                                        <td><Link to={`/edit/${item.id}`}>Update</Link></td>
                                       
                                        </tr>
                                   

                                )
                            })}

                        

                    </tbody>
                </table>

            </div>
        );
    }
}

export default Home;