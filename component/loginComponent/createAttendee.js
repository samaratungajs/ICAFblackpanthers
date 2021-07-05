import React, { Component } from 'react';
import axios from 'axios';
import validator from 'validator'
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import "animate.css";
import 'react-notifications-component/dist/theme.css'
import ClassicFormPage from './form'


const initialState = {
    attendeeName: '',
    address: '',
    Oraganization: '',
    pNumber: '',
    email: '',
    profession: '',
    cardholder: '',
    cardnumber: '',
    month: '',
    year: '',
    cvc: ''

}

class CreateAttendee extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.validateCreditCard = this.validateCreditCard.bind(this);
        this.state = initialState;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let attendee = {
            attendeeName: this.state.attendeeName,
            address: this.state.address,
            pNumber: this.state.pNumber,
            email: this.state.email,
            profession: this.state.profession,
            cardholder: this.state.cardholder,
            cardnumber: this.state.cardnumber,
            month: this.state.month,
            cvc: this.state.cvc
        }
        console.log('Data to Sent', attendee);

        axios.post('https://blackpanthers-icaf.herokuapp.com/atendee/create-attendee', attendee)
            .then(response => {
                store.addNotification({
                    title: "Attendee Registration",
                    message: "success",
                    type:"success",
                    container: "top-right",
                    insert: "top",
                    animationIn: ["animated", "fadein"],
                    animationOut: ["animated", "fadeout"],
                    
                    dismiss: {
                      duration: 3000,
                      showIcon:true
                    },
                    width: 600,
                   
                  })
                  
                  
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }


    validateCreditCard(e) {

        if (validator.isCreditCard(e.target.value)) {
            setErrorMessage('Valid CreditCard Number')
        } else {
            setErrorMessage('Enter valid CreditCard Number!')
        }
    }

    render() {
        return (
            
            <div style={{ backgroundImage: `url("https://www.xmple.com/wallpaper/linear-blue-black-gradient-1920x1080-c2-010204-080b2b-a-225-f-14.svg")` }}>
                            <ReactNotification/>

                <br/>
                <div class="card border-warning pt-5  bg-transparent  text-white col-md-7 offset-md-3 ">
                <h3 align="center">Register Your details to paticipate for the ICAF</h3>

                <form onSubmit={this.onSubmit}  className="m-5 p-5 m-auto" >

                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" name="attendeeName" value={this.state.attendeeName} onChange={this.onChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPNumber" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" id="exampleInputPNumber" pattern="[0-9]{10}" name="pNumber" value={this.state.pNumber} onChange={this.onChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={this.state.email} onChange={this.onChange} />
                        <div id="emailHelp" className="form-text text-warning">We'll never share your email with anyone else</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="exampleInputAddress" name="address" value={this.state.address} onChange={this.onChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInput" className="form-label">Profession</label>
                        <input type="text" className="form-control" id="Inputprofession" name="profession" value={this.state.profession} onChange={this.onChange} />
                    </div>

                    <div class="div-to-align"   >
                        <label className="form-label" align ="center">Payment Details</label>
                    </div>

                    <div class='form-row' >
                                    <div class='col-md-12'>
                                        <div class='form-control total btn btn-dark'>
                                            
                                            <span class='amount text-warning'>Payment: Rs.1000</span>
                                        </div>
                    </div>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="exampleInput" className="form-label">Card Number</label>
                        <input type="text" placeholder="xxxx xxxx xxxx xxxx" maxLength="16" className="form-control" id="exampleInput" name="cardnumber" value={this.state.cardnumber} onChange={this.onChange} />
                    </div>

                    <div>
                        <div class="form-row">
                            <div class="form-group col-md-5">
                                <label for="inputCity">Card holder's Name</label>
                                <input type="text" class="form-control" id="cardholder" name="cardholder" value={this.state.cardholder} onChange={this.onChange} />
                            </div>

                            <div class="form-group col-md-3">
                                <label for="inputmonth">Month and Year</label>
                                <input type="month" class="form-control" id="month" name="month" value={this.state.month} onChange={this.onChange} />
                            </div>


                            <div class="form-group col-md-3">
                                <label for="inputccv">cvc</label>
                                <input type="tel" class="form-control" id="inputccv" pattern='[0-9]{3}' name="cvc" maxLength="3" value={this.state.cvc} onChange={this.onChange} />
                            </div>

                        </div>

                        <div align="center"><button type="submit" className="btn btn-warning" >Submit</button></div>
                    </div>
                </form>
                </div>
            </div>
           
        )

    }
}

export default CreateAttendee;