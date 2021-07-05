import React, { Component } from 'react';
import axios from 'axios';
import './card'


class showapprovedworkshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workshop: []
    }
  }

  componentDidMount() {
    axios.get('https://blackpanthers-icaf.herokuapp.com/workshop/')
      .then(response => {
        console.log('Aprroved Workshops', response.data)
        this.setState({ workshop: response.data.data })
      })
  }

  navigateSubjectPage(e, id) {
    window.location = `/shows/${id}`
  }

  render() {
    return (
      <div className="bg-dark"><br/>
          <h1><span class="badge badge-warning text-dark">Workshops <i class="fas fa-cog fa-spin"></i></span></h1>

      <div id="body" >
        
        
        {this.state.workshop.length > 0 && this.state.workshop.map((item, index) => (
            
              <div >
              <div class="container" id="container">
               <div class="card" key={index} id='card'>
                  <div class="box" id="box">
                    <div class="content" id="content">
                      <h2>{index+1}</h2>
                      <h3>{item.title}</h3>
                      <p>{item.conductorName}</p>
                      <p>{item.Oraganization}</p>
                      <a onClick={e => this.navigateSubjectPage(e, item._id)}>Read More</a>
                    </div>
                  </div>
                </div>
               </div>
              </div> 


            ))}

          </div>
          </div>
        );
  }
}

        export default showapprovedworkshop;