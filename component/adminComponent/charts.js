import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from 'axios';
import AdminPanel from './adminpanelNav';
import { Pie } from "react-chartjs-2";


class ChartsPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      wApproved:0,
      rApproved:0,
      wNotApproved:0,
      rNotApproved:0,
      dataPie: {
        labels: ["NotApproved", "Approved"],
        datasets: [
          {
            data: [0, 0],
            backgroundColor: ["#F7464A", "#46BFBD"],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1"
            ]
          }
        ]
      },
      dataDoughnut1: {
        labels: ["NotApproved", "Approved"],
        datasets: [
          {
            data: [0, 0],
            backgroundColor: ["#F7464A", "#46BFBD"],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1"
            ]
          }
        ]
      }
    }
}


componentDidMount(){
  axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/wcategorytot/Approved')
  .then(response => {
      this.setState({wApproved : response.data.tot })
      axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/wcategorytot/Unapproved')
      .then(response => {
        this.setState({wNotApproved : response.data.tot })
      this.setState({dataPie : {
        labels: ["NotApproved", "Approved"],
        datasets: [
          {
            data: [this.state.wNotApproved,this.state.wApproved ],
            backgroundColor: ["#F7464A", "#46BFBD"],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1"
            ]
          }
        ]
      }})
      console.log(response.data.tot)
      console.log(this.state.wApproved)
    })
  })

  axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/rcategorytot/approved')
  .then(response => {
      this.setState({rApproved : response.data.tot })
      axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/rcategorytot/not approved')
      .then(response => {
        this.setState({rNotApproved : response.data.tot })
      this.setState({dataDoughnut1 : {
        labels: ["NotApproved", "Approved"],
        datasets: [
          {
            data: [this.state.rNotApproved,this.state.rApproved ],
            backgroundColor: ["#F7464A", "#46BFBD"],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1"
            ]
          }
        ]
      }})
      console.log(response.data.tot)
      console.log(this.state.wApproved)
    })
  })



}

render() {
    return (
      <div className="row">
            <div className="col col-lg-2"><AdminPanel/></div>
            <div className="col" align="centrer" style={{ backgroundImage: `url("https://www.xmple.com/wallpaper/linear-blue-black-gradient-1920x1080-c2-010204-080b2b-a-225-f-14.svg")` }}>
      
        <div  class="row w-90">
        <div class="col w-25">        
            <div className="card mb-3 bg-transparent">
            <h5 class="card-title center text-white" align="center">Workshop Statistics</h5>
          <Pie data={this.state.dataPie} options={{ responsive: true }} />
          </div>
        </div>
        <div class="col w-25">        
          <div className="card mb-3 bg-transparent">
            <h5 class="card-title center text-white" align="center">Research Statistics</h5>
          <Pie data={this.state.dataDoughnut1} options={{ responsive: true }} /></div>
        </div>
      </div>
      </div>
      </div>

    );
  }
}

export default ChartsPage;