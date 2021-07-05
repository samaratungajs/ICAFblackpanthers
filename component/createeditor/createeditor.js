import React, { Component } from 'react';
import axios from 'axios';

const initialState = {
    about: '',
    FromDate: '',
    ToDate: '',
    venue: '',
    sponser: '',
    speaker: '',
    status: ''
    
}

class CreateEditor extends Component {
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
        let editor = {
            about: this.state.about,
            ToDate: this.state.ToDate,
            FromDate: this.state.FromDate,
            venue: this.state.venue,
            sponser: this.state.sponser,
            speaker: this.state.speaker,
            Status: " "
        }
        console.log('Data to Sent', editor);
        axios.post('https://blackpanthers-icaf.herokuapp.com/editor/create', editor)
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
            <div className="container">
                <h1 align="center">Add conference Details to the system</h1>

                <form className="pl-5 pr-5" onSubmit={this.onSubmit}>

                    <div className="mb-3">
                        <label htmlFor="about" className="form-label">About</label>
                        <input type="text" className="form-control" id="about" name="about" value={this.state.about} onChange={this.onChange} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="FromDate" className="form-label">From Date</label>
                        <input type="text" className="form-control" id="FromDate" name="FromDate" value={this.state.FromDate} onChange={this.onChange} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="ToDate" className="form-label">To Date</label>
                        <input type="text" className="form-control" id="ToDate" name="ToDate" value={this.state.ToDate} onChange={this.onChange} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="venue" className="form-label">Venue</label>
                        <input type="text" className="form-control" id="venue" name="venue" value={this.state.venue} onChange={this.onChange} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="sponsers" className="form-label">Sponsers</label>
                        <input type="tel" className="form-control" id="sponser"  name="sponser" value={this.state.sponser} onChange={this.onChange} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="speakers" className="form-label">Speakers</label>
                        <input type="text" className="form-control" id="speaker" aria-describedby="speaker" name="speaker" value={this.state.speaker} onChange={this.onChange} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="status" className="form-label">Status</label>
                        <textarea className="form-control" id="status" name="status" value={this.state.status} onChange={this.onChange}></textarea>
                    </div>

                   

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>


            </div>
        )

    }
}

export default CreateEditor;