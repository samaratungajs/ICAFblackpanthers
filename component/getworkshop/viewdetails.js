import React, { Component } from 'react';
import axios from 'axios';
import '../../css/viewdetails'

class ViewDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workshop:[]

        }
    }
componentDidMount() {
    axios.get(`https://blackpanthers-icaf.herokuapp.com/workshop/${this.props.match.params.id}`)
        .then(response => {
            console.log('ALL WORKSHOPS',response.data);
            this.setState({ workshop: response.data.data});
            console.log(this.state.workshop.length);
        })
        .catch(error => {
            alert(error.message)
        })
    }

    render() {
        return (
            <div id="view">
            <div id="container2" >

                <div class="product-details">

                    <h1 align="center">{this.state.workshop.title}</h1>


                    <p class="information"><h2>{this.state.workshop.description}</h2></p>

                    <div class="control1">

                        <a href={this.state.workshop.link}><button class="btn2">
                            <span class="shopping-cart"><i class="fa fa-download" aria-hidden="true"></i></span>
                            <span class="buy">Download</span>
                        </button></a>

                    </div>

                </div>

                <div class="product-image">

                    <img src="https://previews.123rf.com/images/kbuntu/kbuntu1208/kbuntu120800124/14955676-hand-pointing-at-a-workshop-word-cloud-on-white-background-.jpg" alt="" />


                    <div class="info">
                        <br /><br /><h2> Contact Details:</h2><hr />
                        <ul>
                            <li><strong>Name : </strong>{this.state.workshop.conductorName} </li>
                            <li><strong>Email : </strong>{this.state.workshop.email}</li>
                            <li><strong>Address </strong>{this.state.workshop.address}</li>
                            <li><strong>Phone: </strong>{this.state.workshop.pNumber}</li>
                            <li><strong>Oraganization: </strong>{this.state.workshop.Oraganization}</li>
                            


                        </ul>
                    </div>
                </div>

            </div>
            
            
  </div>


        )
    }
}

export default ViewDetails;