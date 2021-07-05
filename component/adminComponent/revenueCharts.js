import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from 'axios';
import AdminPanel from './adminpanelNav';


class RevenuechartsPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rPaid:0,
      rNotpaid:0,
      paymentTot:0,
      ApprovedRe:0,
      UnapprovedRe:0,
      dataDoughnut: {
        labels: ["NotPaid", "Paid"],
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
  axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/rpayed/Paid')
  .then(response => {
      this.setState({rPaid : response.data.tot })
      axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/rpayed/not Paid')
      .then(response => {
        this.setState({rNotpaid : response.data.tot })
      this.setState({dataDoughnut : {
        labels: ["NotPaid", "Paid"],
        datasets: [
          {
            data: [this.state.rNotpaid,this.state.rPaid ],
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

  axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/gettotpayment')
        .then(response => {
            this.setState({paymentTot : response.data.tot })
        })
        axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/rcategorytot/approved')
        .then(response => {
            this.setState({ApprovedRe : response.data.tot })
        })
        axios.get('https://blackpanthers-icaf.herokuapp.com/administrator/rcategorytot/not approved')
        .then(response => {
            this.setState({UnapprovedRe : response.data.tot })
        })
}

render() {
    return (
      <div className="row">
      <div className="col col-lg-2"><AdminPanel/></div>
      <div className="col" style={{ backgroundImage: `url("https://www.xmple.com/wallpaper/linear-blue-black-gradient-1920x1080-c2-010204-080b2b-a-225-f-14.svg")` }}>

        <div align="centrer" class="container-sm ">
        <div className="row">
        <div class="col w-45"> <br/>       
            <div className="card mb-3 bg-transparent">
            <h5 class="card-title center text-white" align="center">Research Revenue</h5>
          <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
          </div>
        </div>
        <div class="col w-50 pt-5" align="center">
          <br/>
                    <div class="card-deck pt-5">
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Research Revenue</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.paymentTot} LKR</h4>
                    </div>
                    </div>
                    </div><br/>
                    <div class="card-deck">
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Approved Research Papers</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.ApprovedRe} papers</h4>
                    </div>
                    </div>
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Research Papers to be Approved</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.UnapprovedRe} papers</h4>
                    </div>
                    </div>
                    </div><br/>
                    <div class="card-deck">
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Research Paid Resarch papers</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.rPaid} papers</h4>
                    </div>
                    </div>
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Research Papers to be Paid</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.rNotpaid} papers</h4>
                    </div>
                    </div>
                    </div>
                </div>
                </div>

      </div>
      </div>
      </div>

    );
  }
}

export default RevenuechartsPage;