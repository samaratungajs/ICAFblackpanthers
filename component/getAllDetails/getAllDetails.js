import React, { Component} from 'react';
import axios from 'axios';

class getAllDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
     editor:[]
    }
  }

  componentDidMount(){
      axios.get('https://blackpanthers-icaf.herokuapp.com/editor/all')
      .then(response =>{
        console.log('ALL details',response.data)
        this.setState({editor : response.data.data})
      })
  }
  
  navigateSubjectPage(e, editorId) {
    window.location = `/editor/${editorId}`
  }

  render() {
      return(
          <div className="container">
            <h1>All Conference Details</h1>
            {this.state.editor.length > 0 && this.state.editor.map((item,index) =>(
              <div key={index} className ="card mb-3" onClick={e => this.navigateSubjectPage(e, item._id)}>
                <h4>{item.about}</h4>
                <h5>{item.FromDate}</h5>
                <h5>{item.ToDate}</h5>
                
                
              </div>
            ))}

          </div>
      );
  }
}

export default getAllDetails;