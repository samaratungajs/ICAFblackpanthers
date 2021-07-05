import React, { Component } from 'react';
import axios from 'axios';
import '../css/approve'



//Displays approved Research papers of a specific email
class approved extends Component {

    constructor(props) {
        super(props);


        this.state = {
            name: '',
            pwd: '',


            approvedPapers: []
        };
       
      
    }

    Retrieve = () => {
        const [name, setName] = useState('');
        const [pwd, setPwd] = useState('');
        const [cookies, setCookie] = useCookies(['user']);
    }


    navigateSubject(e, paperid) {
        window.location = `/payment/${paperid}`
    }

    componentDidMount() {
        axios.get(`https://blackpanthers-icaf.herokuapp.com/research/get/${this.props.match.params.email}`)
            .then(response => {
                this.setState({ approvedPapers: response.data.data });
                console.log(this.state.approvedPapers);
            }).catch(error => {
                alert('error.message');
            })
    }

    render() {
        return (
            <div id="dom">
          
                <br />
                <style>{'body {background: linear-gradient(to top left, #000066 0%, #660066 100%)'}</style>

              
                {this.state.approvedPapers.length > 0 && this.state.approvedPapers.map((item, index) => (
                     <div className="row">
                    <div className="container col-md-7">
                    <div key={index} className="card offset-1 "  id="approve"  >

                   

                     <div class="card-body ">
                     <style>{'body { background-color: #000033; }'}</style>

                                <h5 class="card-title"> {item.papertitle}</h5>
                                <hr />

                                <p id="pay">{item.payment}</p>
                                <p class="card-text"> <p class="card-text">   {item.payment == "not paid" && <button class="btn btn-success" onClick={e => this.navigateSubject(e, item._id)}>make payment</button>}</p></p>

                               


                                </div>

                                    </div>
                           
                                
                   
                                    </div>
                       </div>
                 

                ))}


                </div>
              

        )

    }


}




export default approved;

