import React, { Component } from 'react';
import axios from 'axios';
import AdminPanel from './adminpanelNav';
import Notify from './notify';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import "animate.css";
import 'react-notifications-component/dist/theme.css'
import { Bar } from "react-chartjs-2";
class dashboard extends Component {
    constructor(props){
        super(props);
        this.state ={
            paymentTot:0,
            Approvedworkshops:0,
            Unapprovedworkshops:0,
            ApprovedRe:0,
            UnapprovedRe:0,
            Admins:0,
            Administrators:0,
            Reviewers:0,
            Editors:0,
            Researchers:0,
            Workshoppers:0,
            Attendees:0,
            dataBar: {
                labels: ["Admins", "Reviewers", "Editors"],
                datasets: [
                  {
                    label: "Administrators",
                    data: [0, 0, 0],
                    backgroundColor: [
                      "rgba(255, 134,159,0.4)",
                      "rgba(98,  182, 239,0.4)",
                      "rgba(170, 128, 252,0.4)"
                    ],
                    borderWidth: 3,
                    borderColor: [
                      "rgba(255, 134, 159, 1)",
                      "rgba(98,  182, 239, 1)",
                      "rgba(170, 128, 252, 1)"
                    ]
                  }
                ]
              },
              barChartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  xAxes: [
                    {
                      barPercentage: 1,
                      gridLines: {
                        display: true,
                        color: "rgba(0, 0, 0, 0.1)"
                      }
                    }
                  ],
                  yAxes: [
                    {
                      gridLines: {
                        display: true,
                        color: "rgba(0, 0, 0, 0.1)"
                      },
                      ticks: {
                        beginAtZero: true
                      }
                    }
                  ]
                }
              },
              //users
              dataBarUsers: {
                labels: ["Researchers", "Workshop Conductors", "Attendees"],
                datasets: [
                  {
                    label: "Users",
                    data: [0, 0, 0],
                    backgroundColor: [
                      "rgba(255, 134,159,0.4)",
                      "rgba(98,  182, 239,0.4)",
                      "rgba(170, 128, 252,0.4)"
                    ],
                    borderWidth: 3,
                    borderColor: [
                      "rgba(255, 134, 159, 1)",
                      "rgba(98,  182, 239, 1)",
                      "rgba(170, 128, 252, 1)"
                    ]
                  }
                ]
              },
              barChartOptionsUsers: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  xAxes: [
                    {
                      barPercentage: 1,
                      gridLines: {
                        display: true,
                        color: "rgba(0, 0, 0, 0.1)"
                      }
                    }
                  ],
                  yAxes: [
                    {
                      gridLines: {
                        display: true,
                        color: "rgba(0, 0, 0, 0.1)"
                      },
                      ticks: {
                        beginAtZero: true
                      }
                    }
                  ]
                }
              }
        }
    }

    componentDidMount(){
        axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/gettotpayment')
        .then(response => {
            this.setState({paymentTot : response.data.tot })
        })
        axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/wcategorytot/Approved')
        .then(response => {
            this.setState({Approvedworkshops : response.data.tot })
        })
        axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/wcategorytot/Unapproved')
        .then(response => {
            this.setState({Unapprovedworkshops : response.data.tot })
        })
        axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/rcategorytot/approved')
        .then(response => {
            this.setState({ApprovedRe : response.data.tot })
        })
        axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/rcategorytot/not approved')
        .then(response => {
            this.setState({UnapprovedRe : response.data.tot })
        })
        axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/gettot')
        .then(response => {
            this.setState({Admins : response.data.totalAdmins })
        })

        axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/categorytot/Admin')
        .then(response => {
            this.setState({Administrators : response.data.tot })
            axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/categorytot/Reviewer')
            .then(response => {
                this.setState({Reviewers : response.data.tot })
                axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/categorytot/Editor')
                .then(response => {
              this.setState({Editors : response.data.tot })
            this.setState({dataBar: {
                labels: ["Admin", "Reviewer", "Editor"],
                datasets: [
                  {
                    label: "Administrators",
                    data: [this.state.Administrators, this.state.Reviewers, this.state.Editors],
                    backgroundColor: [
                      "rgba(255, 134,159,0.4)",
                      "rgba(98,  182, 239,0.4)",
                      "rgba(170, 128, 252,0.4)"
                    ],
                    borderWidth: 3,
                    borderColor: [
                      "rgba(255, 134, 159, 1)",
                      "rgba(98,  182, 239, 1)",
                      "rgba(170, 128, 252, 1)"
                    ]
                  }
                ]
              }
            })
            })
          })
        })

        axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/categorytot/Researcher')
        .then(response => {
            this.setState({Researchers : response.data.tot })
            axios.get('https://blackpanthers-icaf.herokuapp.com/atendee/count')
            .then(response => {
                this.setState({Attendees : response.data.tot })
                axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/categorytot/Workshopper')
                .then(response => {
              this.setState({Workshoppers : response.data.tot })
            this.setState({dataBarUsers: {
                labels: ["Researcher", "Workshopper", "Attendee"],
                datasets: [
                  {
                    label: "Users",
                    data: [this.state.Researchers, this.state.Workshoppers, this.state.Attendees],
                    backgroundColor: [
                      "rgba(255, 134,159,0.4)",
                      "rgba(98,  182, 239,0.4)",
                      "rgba(170, 128, 252,0.4)"
                    ],
                    borderWidth: 3,
                    borderColor: [
                      "rgba(255, 134, 159, 1)",
                      "rgba(98,  182, 239, 1)",
                      "rgba(170, 128, 252, 1)"
                    ]
                  }
                ]
              }
            })
            })
          })
        })


        store.addNotification({
            title: "There are conference details",
            message: "To be Approved",
            type:"info",
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

    }


    render(){
        return(
            <div className="bg-dark" style={{ backgroundImage: `url("https://www.xmple.com/wallpaper/linear-blue-black-gradient-1920x1080-c2-010204-080b2b-a-225-f-14.svg")` }}>
            <div className="row"  >
            <div className="col col-lg-2"><AdminPanel/></div>
            <div className="col">
                <div>
                <ReactNotification/>
                    
                    </div>
                <h4 align="center" className="text-white">Dashboard <Notify/></h4> 
                <div align="center" className="container-sm">
                <div className="row">
                    <div class="col w-45 mt-1"> 
                    <div class="card-deck">
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Approved Workshops</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.Approvedworkshops}</h4>
                    </div>
                    </div>
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Not Approved Workshops</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.Unapprovedworkshops}</h4>
                    </div>
                    </div>
                    
                    </div><br/>
                    <div class="card-deck">
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Approved Researches</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.ApprovedRe}</h4>
                    </div>
                    </div>
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Not Approved Researches</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.UnapprovedRe}</h4>
                    </div>
                    </div>
                    </div>
                    <br/>
                    <div class="card-deck">
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Registered Site Users</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.Admins}</h4>
                    </div>
                    </div>
                    </div>
                
                    <div class="card-deck">
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Research Revenue</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.paymentTot} LKR</h4>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div class="col w-50 pt-1" align="center">
                    <div class="card-deck">
                    <div class="card text-white bg-white mb-3 ">
                    <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
                    </div>
                    </div>
                    <div class="card-deck">
                    <div class="card text-white bg-white mb-3 ">
                    <Bar data={this.state.dataBarUsers} options={this.state.barChartOptionsUsers} />
                    </div>
                    </div>
                    </div>

                </div>
            </div>
            </div>
            </div>

            </div>

        )
    }
}

export default dashboard;