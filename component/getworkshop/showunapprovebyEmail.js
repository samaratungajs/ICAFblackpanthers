import React, { Component } from 'react';
import axios from 'axios';

class showunapprovedbyEmail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            unapprovedWorkshop: []
        }

    }



    componentDidMount() {
        axios.get(`https://blackpanthers-icaf.herokuapp.com/workshop/email/unapprove/${this.props.match.params.email}`)
            .then(response => {
                this.setState({ unapprovedWorkshop: response.data.data });
                console.log(this.state.unapprovedWorkshop);
            }).catch(error => {
                alert('error.message');
            })
    }

    render() {
        return (
            <div id="dom">
          
            <br />
            <style>{'body {background: linear-gradient(to top left, #000066 0%, #660066 100%)'}</style>

          
            {this.state. unapprovedWorkshop.length > 0 && this.state. unapprovedWorkshop.map((item, index) => (
                 <div className="row">
                <div className="container col-md-7">
                <div key={index} className="card offset-1 "  id="approve"  >

               

                 <div class="card-body ">
                 <style>{'body { background-color: #000033; }'}</style>

                            <h5 class="card-title"> {item.title}</h5>
                                <p class="card-text">
                                <h6>{item.Oraganization}</h6>
                                <h6>{item.conductorName}</h6>
                                <h6>{item.address}</h6>
                                <h6>{item.pNumber}</h6>
                                <h6>{item.email}</h6>
                                <p>{item.description}</p>
                                <h6>{item.link}</h6>
                                <h5 id="status">{item.Status}</h5>
                                
                                </p>
                           
                           


                            </div>

                                </div>
                       
                            
               
                                </div>
                   </div>
             

            ))}


            </div>


        )

    }
}






export default showunapprovedbyEmail;