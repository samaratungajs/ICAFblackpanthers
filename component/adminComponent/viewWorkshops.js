import React, { Component } from 'react';
import axios from 'axios';
import AdminPanel from './adminpanelNav';

class ViewWorkshops extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state ={
            workshop:[],
            input:''

        }
    }

    
    getWorkshops = (item) => {
        axios.get(`https://blackpanthers-icaf.herokuapp.com/administrator/getwcategory/${item._id}`)   
        .then(response => {
            this.setState({workshop : response.data.data })
        })
    }

    onChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    onSubmit(e){
        e.preventDefault();
        
        axios.get(`https://blackpanthers-icaf.herokuapp.com/administrator/getwcategory/${this.state.input}`)   
        .then(response => {
            this.setState({workshop : response.data.data })
        })
    }

    render(){
        return(
                    
            <div className="row bg-dark">
            <div className="col col-lg-2"><AdminPanel/></div>
            <div className="col" style={{ backgroundImage: `url("https://www.xmple.com/wallpaper/linear-blue-black-gradient-1920x1080-c2-010204-080b2b-a-225-f-14.svg")` }}>

            <div align="center" className="container-sm">

            <form onSubmit={this.onSubmit}>
                <div className="m-5 w-75 align-items-center" >
                <div className=" m-5 w-75" >
                    <h6><label for="exampleInputtype" className="form-label text-white">Search Workshops by Category (Approved/Unapproved)</label></h6>
                        <input type="text" className="form-control" id="exampleInputtype" name="input" aria-describedby="emailHelp" value={this.state.input} onChange={event => this.onChange(event)}  />
                    </div>                 
                <button type="submit" className="btn btn-primary ">Search</button>
                </div>
            </form>

                <div className="card mb-2 w-75 " >
                    <div className="p-3 text-white bg-dark"> 
                    <div class="row ">
                        <div class="col">
                       <h6>ConductorName</h6> 
                        </div>
                        <div class="col">
                        <h6>Title</h6>   
                        </div>
                        <div class="col">
                        <h6>Oraganization</h6>
                        </div>
                        <div class="col">
                        <h6>Email</h6>
                        </div>
                        </div>
                    </div>
                </div>
                {this.state.workshop.length > 0 && this.state.workshop.map((item, index) => (
                    <div key={index} className="card w-75 mb-3" >
                        <div className="p-3 text-black bg-light">                       
                        <div class="row">
                        <div class="col">
                        {item.conductorName}
                        </div>
                        <div class="col">
                        {item.title}    
                        </div>
                        <div class="col">
                        {item.Oraganization}    
                        </div>
                        <div class="col">
                        {item.email}    
                        </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            </div>

        )
    }
}

export default ViewWorkshops;