import React, { Component } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';

class WorkshopStatus extends Component {
    constructor(props) {
        super(props);
        this.onClickApprove = this.onClickApprove.bind(this);
        this.onClickUnapprove = this.onClickUnapprove.bind(this);
       
        this.state = {
            workshop: []


        }
        emailjs.init('user_kRLPkd1wRJtleTR0q51YK');

    }

  
    componentDidMount() {
        axios.get(`https://blackpanthers-icaf.herokuapp.com/workshop/${this.props.match.params.id}`)
            .then(response => {
                console.log('ALL WORKSHOPS', response.data);
                this.setState({ workshop: response.data.data });
                console.log(this.state.workshop.length);
            })
            .catch(error => {
                alert(error.message)
            })
    }

    onClickApprove() {
        axios.put(`https://blackpanthers-icaf.herokuapp.com/workshop/approved/${this.props.match.params.id}`)
            .then(response => {
                alert('Workshop scuccefully Approved ')
               
                window.location.reload(false);
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            })
        
            const btn = document.getElementById('button');

            document.getElementById('form')
             .addEventListener('submit', function(event) {
               event.preventDefault();
            
               btn.value = 'Sending...';
            
               const serviceID = 'default_service';
               const templateID = 'template_683bea9';
            
               emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                  btn.value = 'Send Email';
                  alert('Sent!');
                }, (err) => {
                  btn.value = 'Send Email';
                  alert(JSON.stringify(err));
                });
            });




    }

    onClickUnapprove() {
        axios.put(`https://blackpanthers-icaf.herokuapp.com/workshop/unapproved/${this.props.match.params.id}`)
            .then(response => {
                alert('Workshop scuccefully Approved ');
                window.location.reload(false);
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }

   


    render() {
        return (
            <div className="container"><style>{'body {background: linear-gradient(to top left, #000066 0%, #660066 100%)'}</style>
                <h1><span class="badge badge-secondary">Workshop</span></h1>
                <div className="card mb-3">
                    <div className="p-3">
                        <h2>{this.state.workshop.title}</h2>
                        <h4>{this.state.workshop.Oraganization}</h4>
                        <h3 name="to_name">{this.state.workshop.conductorName}</h3>
                        <h5>{this.state.workshop.address}</h5>
                        <h5>{this.state.workshop.pNumber}</h5>
                        <h5 name="to_email">{this.state.workshop.email}</h5>
                        <a href={this.state.workshop.link}>{this.state.workshop.link}</a>
                        <h5>{this.state.workshop.description}</h5>
                        <h3>{this.state.workshop.Status}</h3>
                        <form id="form">

                        <input type="hidden" name="to_name" id="to_name"value={this.state.workshop.conductorName} />
                        <input type="hidden" name="to_email" id="to_email" value={this.state.workshop.email}/>
                        
                        <button type="submit" className="btn btn-primary" id="button" onClick={this.onClickApprove} >Approve</button>
                         &nbsp;&nbsp;
                        <button type="submit" className="btn btn-primary" onClick={this.onClickUnapprove}>Unapprove</button>
                        </form>
                    </div>
                </div>
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
                
            </div>
        )
    }
}

export default WorkshopStatus;