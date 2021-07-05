import React, { Component } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';


//Display details of a specific research paper
class Paper extends Component {
    constructor(props) {
        super(props);
        this.onUpdate = this.onUpdate.bind(this),
            this.onUpdatenotapproval = this.onUpdatenotapproval.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state = {

            Papers: ''
        }

        emailjs.init('user_POwld6FyKa1zfCwDXeUOV')
    }

    componentDidUpdate() {
        this.onDelete;
    }
    onDelete() {
        axios.delete(`https://blackpanthers-icaf.herokuapp.com/research/delete/${this.props.match.params.id}`)

            .then(response => {
                alert('Research paper is deleted');
                window.location = `/`;
            }).catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }

    onUpdate() {
        axios.put(`https://blackpanthers-icaf.herokuapp.com/research/update/${this.props.match.params.id}`)
            .then(response => {
                alert('Research paper is approved');

            }).catch(error => {
                console.log(error.message);
                alert(error.message);
            })
        const btn = document.getElementById('button');
        document.getElementById('form')
            .addEventListener('submit', function (event) {
                event.preventDefault();

                btn.value = 'Sending...';

                const serviceID = 'default_service';
                const templateID = 'template_5ch6pli';

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
    onUpdatenotapproval() {
        axios.put(`https://blackpanthers-icaf.herokuapp.com/research/update/disapproved/${this.props.match.params.id}`)
            .then(response => {
                alert('Research paper is not approved');
            }).catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }

    componentDidMount() {

        axios.get(`https://blackpanthers-icaf.herokuapp.com/research/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ Papers: response.data.data })
                console.log(this.state.Papers);


            }).catch(error => {
                alert(error.message);
            });

    }

    render() {
        return (
            <div className="container"><br /> <style>{'body {background: linear-gradient(to top left, #000066 0%, #660066 100%)'}</style>
                <div class="card bg-light mb-3">
                    <div class="card-header"><h2>{this.state.Papers.papertitle}</h2></div>
                    <div class="card-body">
                        <h5 class="card-title">Abstract</h5>
                        <p class="card-text">{this.state.Papers.abstract}<br /><br />
                            <h3><a href={this.state.Papers.url}>View the paper</a></h3> </p>
                    </div>
                


                <h1></h1>
                <form id="form">
                    <input type="hidden" name="to_name" id="to_name" value={this.state.Papers.authorname}></input>
                    <input type="hidden" name="to_email" id="to_email" value={this.state.Papers.email} />
                    <input type="hidden" name="to_title" id="to_title" value={ this.state.Papers.papertitle}/>
                    <button type="submit" id="button" class="btn btn-outline-dark" onClick={this.onUpdate}>Approve</button>&nbsp;&nbsp;&nbsp;


                    <button type="button" class="btn btn-outline-dark" onClick={this.onUpdatenotapproval}>disApprove</button>&nbsp;&nbsp;&nbsp;

                    <button type="button" class="btn btn-outline-dark" onClick={this.onDelete}>Delete</button>
                </form>
                <script type="text/javascript"
                    src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
                </div>
            </div>
        )
    }
}

export default Paper;