import React, { Component } from 'react';
import axios from 'axios';
import AdminPanel from './adminpanelNav';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import "animate.css";
import 'react-notifications-component/dist/theme.css'

class ViewConfDetails extends Component {
    constructor(props){
        super(props);
        this.state ={
            conference:[]
        }
    }

    componentDidMount(){
        axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/conference')
        .then(response => {
            this.setState({conference : response.data.data })
        })
    }

    handleApprove = (item) => {
        axios.put(`https://blackpanthers-icaf.herokuapp.com/administrator/approvecd/${item._id}`)   
        .then(response=>{
            store.addNotification({
                title: "Conference Details",
                message: "Approved",
                type:"success",
                container: "top-right",
                insert: "top",
                animationIn: ["animated", "fadein"],
                animationOut: ["animated", "fadeout"],
                
                dismiss: {
                  duration: 2000,
                  showIcon:true
                },
                width: 600,
               
              })
            this.componentDidMount();
        }).catch(error=>{
            console.log(error.message);
            alert(error.message);
        })
    }
    handleNotApprove = (item) => {
        axios.put(`https://blackpanthers-icaf.herokuapp.com/administrator/disapprovecd/${item._id}`)   
        .then(response=>{
            store.addNotification({
                title: "Conference Details",
                message: "Rejected",
                type:"warning",
                container: "top-right",
                insert: "top",
                animationIn: ["animated", "fadein"],
                animationOut: ["animated", "fadeout"],
                
                dismiss: {
                  duration: 2000,
                  showIcon:true
                },
                width: 600,
               
              })
            this.componentDidMount();
        }).catch(error=>{
            console.log(error.message);
            alert(error.message);
        })
    }

    render(){
        return(
            <div className="row bg-dark">
             <div className="col col-lg-2"><AdminPanel/></div>
             <div className="col" style={{ backgroundImage: `url("https://www.xmple.com/wallpaper/linear-blue-black-gradient-1920x1080-c2-010204-080b2b-a-225-f-14.svg")` }}>
             <ReactNotification/>
            <div align="center" className="container-sm">
                <h4 align="center" className="text-white mt-1">Conference Details</h4>
                {this.state.conference.length > 0 && this.state.conference.map((item, index) => (
                    <div key={index} className="card w-75 mb-3" >
                        <div className="p-3 text-white bg-secondary">                       
                        <div class="row">                   
                        <h5>{item.about}</h5>                                           
                        </div></div>
                        <div className="p-3 text-white bg-dark">
                        <div class="row">                     
                        <h6>From: {item.FromDate}</h6>                     
                        </div></div>
                        <div className="p-3 text-white bg-dark">
                        <div class="row">                     
                        <h6>To: {item.ToDate}</h6>                     
                        </div></div>
                        <div className="p-3 text-white bg-dark">
                        <div class="row">                     
                        <h6>Venue: {item.venue} </h6>                    
                        </div></div>
                        <div className="p-2 text-white bg-dark">
                        <div class="row text-white bg-danger"> <h5>Sponsors</h5></div>
                        {item.sponsers.length > 0 && item.sponsers.map((i, index) => (
                            <div class="row"> 
                            <div key={index} class="col">
                            <h6>{i}</h6>
                            </div>                                         
                            </div>
                         ))}
                        </div>
                        <div className="p-2 text-white bg-dark">
                        <div class="row text-white bg-danger"> <h5>Key Note Speakers</h5></div>
                        {item.speakers.length > 0 && item.speakers.map((i, index) => (
                            <div class="row"> 
                            <div key={index} class="col">
                            <h6>{i}</h6>
                            </div>                                         
                            </div>
                         ))}
                        </div>
                        <div className="p-3 text-white bg-secondary">
                        <div class="row">                     
                        <h5>Status: {item.status} </h5>                   
                        </div>
                        <button className="btn btn-dark m-1"  onClick={() => this.handleApprove(item)}> <i class='fa fa-check'></i> </button>
                        
                         <button className="btn btn-dark m-1" onClick={() => this.handleNotApprove(item)}><i class='fa fa-ban'></i></button>
                        
                        </div>
                        
                        
                    </div>
                ))}
            </div>
            </div>
            </div>

        )
    }
}

export default ViewConfDetails;