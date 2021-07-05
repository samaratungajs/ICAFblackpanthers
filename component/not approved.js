import React, { Component } from 'react';
import axios from 'axios';

//Displays not approved Research papers of a specific email
class notapproved extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notapprovedPapers: []
        }

    }


    componentDidMount() {
        axios.get(`https://blackpanthers-icaf.herokuapp.com/research/getnotapproval/${this.props.match.params.email}`)
            .then(response => {
                this.setState({ notapprovedPapers: response.data.data });
                console.log(this.state.approvedPapers);
            }).catch(error => {
                alert('error.message');
            })
    }

    render() {
        return (
            <div id="dom">
          
            <br />
            <style>{'body {background: linear-gradient(to top left, #000066 0%, #660066 100%)'}</style>

          
            {this.state.notapprovedPapers.length > 0 && this.state.notapprovedPapers.map((item, index) => (
                 <div className="row">
                <div className="container col-md-7">
                <div key={index} className="card offset-1 "  id="approve"  >

               

                 <div class="card-body ">
                 <style>{'body { background-color: #000033; }'}</style>

                            <h5 class="card-title"> {item.papertitle}</h5>
                           
                           
                           


                            </div>

                                </div>
                       
                            
               
                                </div>
                   </div>
             

            ))}


            </div>

        )

    }
}






export default notapproved;