import React, { Component } from 'react';
import axios from 'axios'
import AdminPanel from './adminpanelNav';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import "animate.css";
import 'react-notifications-component/dist/theme.css'
class AddAdministrator extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            username:'',
            usertype:'',
            password:''
        }
    }

    onChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    onSubmit(e){
        e.preventDefault();
        let admin = {
            username: this.state.username,
            password: this.state.password,
            usertype: this.state.usertype
            
        }
        console.log('Data to send', admin )
        axios.post('https://blackpanthers-icaf.herokuapp.com/user/register', admin)
        .then(response => {
            
            store.addNotification({
                title: "Administrator Successfully",
                message: "Added",
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
              window.location='/view-admin'
            
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message)
        })
    }

    render(){
        return(
            <div className="row bg-dark">
            <div className="col col-lg-2"><AdminPanel/></div>
            <div className="col pt-2 gradient" style={{ backgroundImage: `url("https://www.xmple.com/wallpaper/linear-blue-black-gradient-1920x1080-c2-010204-080b2b-a-225-f-14.svg")` }}>

            <div id="content-wrapper" class="d-flex flex-column" >
            <div id="content" align="center" >
            <ReactNotification/>

            <div class="card border-warning w-75 m-2 mb-2 bg-dark bg-transparent text-white border-secondary mb-3 align-items-center" >
                        <div class="card-body">
                <h1 className="mb-3 font-weight-bold" align="center">Add Administrator</h1>
                <form onSubmit={this.onSubmit}>
                <div className="m-5 w-75 align-items-center" >
                    <div>
                        <h6><label for="exampleInputEmail1" className="form-label">Email address</label></h6>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="username" aria-describedby="emailHelp" value={this.state.username} onChange={event => this.onChange(event)} />
                    </div>
                    </div>
                    <div className=" m-5 w-75" >
                    <select class="form-select" aria-label="Default select example" name="usertype" value={this.state.usertype} onChange={event => this.onChange(event)}>
                        <option selected>select Admin Type</option>
                        <option value="Admin">Admin</option>
                        <option value="Reviewer">Reviewer</option>
                        <option value="Editor">Editor</option>
                        </select>     
                        </div>
                    <div className="m-5 w-75" >
                    <h6><label for="exampleInputPassword1" className="form-label">Password</label></h6>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={this.state.password} onChange={event => this.onChange(event)}  />
                    </div>
                    
                    <button type="submit" className="btn btn-primary m-5">Add Administrator</button>
                    </form>
                    </div>
                    </div>

            </div>
            </div>
            </div>
            </div>

        )
    }
}

export default AddAdministrator;