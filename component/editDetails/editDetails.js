import React, { Component } from 'react';
import axios from 'axios';


class editDetails extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            about: '',
            FromDate: '',
            ToDate: '',
            venue: '',
            sponser: '',
            speaker: '',
            Status: '',
            editor: []
        }
    }

    onChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
        
    }

    
    onSubmit(e) {
        e.preventDefault();
        let Editor = {
            about: about.value,
            ToDate: ToDate.value,
            FromDate: FromDate.value,
            venue: venue.value,
            sponser: sponser.value,
            speaker: speaker.value,
            Status: Status.value
        }
        console.log(Status.value);
        console.log('Data to Sent', Editor);
        axios.put(`https://blackpanthers-icaf.herokuapp.com/editor/update/${this.props.match.params.id}`, Editor)
            .then(response => {
                alert('Data successfully updated')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }

    componentDidMount() {
        axios.get(`https://blackpanthers-icaf.herokuapp.com/editor/${this.props.match.params.id}`)
            .then(response => {
                console.log('ALL details', response.data)
                this.setState({ editor: response.data.data })
                this.setState({ about: response.data.data.about })
                this.setState({ FromDate: response.data.data.FromDate })
                this.setState({ ToDate: response.data.data.ToDate })
                this.setState({ venue: response.data.data.venue })
                this.setState({ sponser: response.data.data.FromDate })
                this.setState({ speaker: response.data.data.speaker })
                this.setState({ Status: response.data.data.Status })


                console.log(response.data.data.about)
            })
    }

    // navigateSubjectPage(e, editorId) {
    //   window.location = `/${editorId}`
    // }

    render() {
        return (
            <div className="container">
                <h1>Edit conference Details</h1>

                <form onSubmit={this.onSubmit}>

                    <div className="mb-3">
                        <label htmlFor="about" className="form-label">About</label>
                        <input type="text" className="form-control" id="about" name="about" value={this.state.about} onChange={this.onChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="FromDate" className="form-label">From Date</label>
                        <input type="text" className="form-control" id="FromDate" name="FromDate" value={this.state.FromDate} onChange={this.onChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="ToDate" className="form-label">To Date</label>
                        <input type="text" className="form-control" id="ToDate" name="ToDate" value={this.state.ToDate} onChange={this.onChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="venue" className="form-label">Venue</label>
                        <input type="text" className="form-control" id="venue" name="venue" value={this.state.venue} onChange={this.onChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="sponsers" className="form-label">Sponsers</label>
                        <input type="tel" className="form-control" id="sponser"  name="sponser" value={this.state.sponser} onChange={this.onChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="speakers" className="form-label">Speakers</label>
                        <input type="text" className="form-control" id="speaker" aria-describedby="speaker" name="speaker" value={this.state.speaker} onChange={this.onChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        {/* <input className="form-control" id="status" name="status" value={this.state.editor.status} onChange={this.onChange}></input> */}
                        
                        <select class="form-select" aria-label="Default select example" id="Status" name="Status" value={this.state.Status} onChange={this.onChange}>
                        <option selected >Open this to select</option>
                        <option value="approved">Approved</option>
                        <option value="notApproved">Not Approved</option>
                    </select>
                    </div>




                    <button type="submit" className="btn btn-primary">Save Details</button>

                </form>


            </div>
        )

    }
}

export default editDetails;