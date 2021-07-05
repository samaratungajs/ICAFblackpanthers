import React, { Component } from 'react';
import axios from 'axios';
import AdminPanel from './adminpanelNav';
import { MDBContainer } from "mdbreact";

class ViewAdministrator extends Component {
    constructor(props){
        super(props);
        this.state ={
            administrators:[]
        }
    }

    componentDidMount(){
        axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/')
        .then(response => {
            this.setState({administrators : response.data.data })
        })
    }
    
    handleEditAdmin = (id) => {
        window.location=`/update/${id}`
    }
    
    handleDeleteAdmin = (item) => {
        axios.delete(`https://blackpanthers-icaf.herokuapp.com/administrator/delete/${item._id}`)   
        .then(response=>{
            alert('Administrator Removed');
            this.componentDidMount();
        }).catch(error=>{
            console.log(error.message);
            alert(error.message);
        })
    }

    render(){
        return(
            <div className="row " style={{ backgroundImage: `url("https://www.xmple.com/wallpaper/linear-blue-black-gradient-1920x1080-c2-010204-080b2b-a-225-f-14.svg")` }}>
            <div className="col col-lg-2"><AdminPanel/></div>
            
            <div className="col " >
            <div className="scrollbar scrollbar-primary  mt-5 mx-auto">
                <br/>
            <div align="center" className="container-sm">
                <h5 align="center" className="text-white">Administrators</h5>
                <div className="card mb-3 w-75 " >
                    <div className="p-3 text-white bg-dark"> 
                    <div class="row ">
                        <div class="col">
                       <h6>Username</h6> 
                        </div>
                        <div class="col">
                        <h6>User Type</h6>   
                        </div>
                        <div class="col">
                        <h6>Actions</h6>
                        </div>
                        </div>
                    </div>
                </div>
                {this.state.administrators.length > 0 && this.state.administrators.map((item, index) => (
                    <div key={index} className="card w-75 mb-3" >
                        <div className="p-3 text-black bg-light">                       
                        <div class="row">
                        <div class="col-sm">
                        {item.username}
                        </div>
                        <div class="col-sm-3">
                        {item.usertype}    
                        </div>
                        
                        <div class="col">
                        <div class="col-sm">
                        <button className="btn btn-dark m-1" onClick={this.handleEditAdmin.bind(this, item._id)}> <i class='fas fa-pencil-alt'></i> </button>
                         
                        {/* <a href="#"> */}
                        <button className="btn btn-dark m-1" onClick={() => this.handleDeleteAdmin(item)}><i class="fas fa-trash-alt"></i></button>
                        {/* </a> */}
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            </div>
            </div>

        )
    }
}

export default ViewAdministrator;