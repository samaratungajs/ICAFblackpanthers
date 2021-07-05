import React, { Component } from 'react';
import axios from 'axios';
import '../css/approvepaid'



//Displays all approved and  Research papers 
class paidallapproved extends Component {

    constructor(props) {
        super(props);


        this.state = {
            approvedPapers: []
        };


    }




    navigateSubject(e, paperid) {
        window.location = `/onepaper/${paperid}`
    }

    componentDidMount() {
        axios.get(`https://blackpanthers-icaf.herokuapp.com/research/getallapproved`)
            .then(response => {
                this.setState({ approvedPapers: response.data.data });
                console.log(this.state.approvedPapers);
            }).catch(error => {
                alert('error.message');
            })
    }

    render() {
        return (
            <div class="bg-dark">
            <h1 align="center"><span class="badge badge-warning text-dark">Research Papers  <i class="fas fa-sync-alt fa-spin"></i></span></h1>
            <div id="body" > 
          
            
            {this.state. approvedPapers.length > 0 && this.state. approvedPapers.map((item, index) => (
                
                  <div >
                  <div class="container" id="container">
                   <div class="card" key={index} id='card'>
                      <div class="box" id="box">
                        <div class="content" id="content">
                          <h2>{index+1}</h2>
                                    <h6>{item.email}</h6>
                                    <h6>{item.papertitle}</h6>
                          
                          <a onClick={e => this. navigateSubject(e, item._id)}>Read More</a>
                        </div>
                      </div>
                    </div>
                   </div>
                  </div> 
    
                ))}
    
                </div>
                </div>
        )

    }
}






export default paidallapproved;