import React, { Component } from 'react';
import axios from 'axios';

const initialState = {
    conductorName: '',
    title: '',
    Oraganization: '',
    address: '',
    pNumber: '',
    email: '',
    description: '',
    link: '',
    Status: " "
}

class CreateWorkshop extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let workshop = {
            conductorName: this.state.conductorName,
            title: this.state.title,
            Oraganization: this.state.Oraganization,
            address: this.state.address,
            pNumber: this.state.pNumber,
            email: this.state.email,
            description: this.state.description,
            link: this.state.link,
            Status: " "
        }
        console.log('Data to Sent', workshop);
        axios.post('https://blackpanthers-icaf.herokuapp.com/workshop/create', workshop)
            .then(response => {
                alert('Data successfully inserted')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }


    render() {
        return (
            <div className="container pl-5 pt-3">            <style>{'body {background: linear-gradient(to top left, #000066 0%, #660066 100%)'}</style>

                <h1 className="text-white" align="center">Registeration For Conducting a Workshop</h1>

                <form className="pl-5 pr-5" onSubmit={this.onSubmit}>

                    <div className="mb-2">
                        <label htmlFor="exampleInputConductorName" className="form-label text-white">Conductor Name</label>
                        <input type="text" className="form-control" id="exampleInputConductorName" name="conductorName" value={this.state.conductorName} onChange={this.onChange} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="exampleInputTitle" className="form-label text-white">Title of Workshop</label>
                        <input type="text" className="form-control" id="exampleInputTitle" name="title" value={this.state.title} onChange={this.onChange} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="exampleInputOrganization" className="form-label text-white">Organization</label>
                        <input type="text" className="form-control" id="exampleInputOrganization" name="Oraganization" value={this.state.Oraganization} onChange={this.onChange} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="exampleInputAddress" className="form-label text-white">Address</label>
                        <input type="text" className="form-control" id="exampleInputAddress" name="address" value={this.state.address} onChange={this.onChange} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="exampleInputPNumber" className="form-label text-white">Phone Number</label>
                        <input type="tel" className="form-control" id="exampleInputPNumber" pattern="[0-9]{10}" name="pNumber" value={this.state.pNumber} onChange={this.onChange} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={this.state.email} onChange={this.onChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="exampleInputDes" className="form-label text-white">Description</label>
                        <textarea className="form-control" id="exampleInputLink" name="description" value={this.state.description} onChange={this.onChange}></textarea>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="exampleInputLink" className="form-label text-white">Link</label>
                        <input type="url" className="form-control" id="exampleInputLink" name="link" value={this.state.link} onChange={this.onChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>


            </div>
        )

    }
}

export default CreateWorkshop;