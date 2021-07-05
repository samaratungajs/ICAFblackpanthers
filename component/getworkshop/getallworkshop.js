import React, { Component} from 'react';
import axios from 'axios';

class getallworkshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
     workshop:[]
    }
  }

  componentDidMount(){
      axios.get('https://blackpanthers-icaf.herokuapp.com/workshop/all')
      .then(response =>{
        console.log('ALL WORKSHOPS',response.data)
        this.setState({workshop : response.data.data})
      })
  }
  
  navigateSubjectPage(e, workshopId) {
    window.location = `/workshop/${workshopId}`
  }

  render() {
      return(
          <div className="container"><style>{'body {background: linear-gradient(to top left, #000066 0%, #660066 100%)'}</style>
            <h1 className="text-white" align="center">Workshops</h1>
            {this.state.workshop.length > 0 && this.state.workshop.map((item,index) =>(
              <div key={index} className ="card mb-3" onClick={e => this.navigateSubjectPage(e, item._id)}>
                <h4>{item.title}</h4>
                <h5>{item.Oraganization}</h5>
              </div>
            ))}

          </div>
      );
  }
}

export default getallworkshop;