import React, { Component } from 'react';
import axios from 'axios';
import '../css/onepaper'

class onepaper extends Component {
    constructor(props) {
        super(props);

        this.state = {

            Papers: ''
        }
    }





    componentDidMount() {

        axios.get(`https://blackpanthers-icaf.herokuapp.com/research/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ Papers: response.data.data })
                console.log(this.state.Papers);


            }).catch(error => {
                alert(error.message);
            });

    }

    render() {
        return (

            <div id="container1">

                <div class="product-details">

                    <h1>{this.state.Papers.papertitle}</h1>


                    <p class="information">{this.state.Papers.abstract}</p>



                 

                </div>

                
              
                <div class="product-image">

                    <img src="https://thumbs.dreamstime.com/b/research-human-hand-writing-words-184403979.jpg" alt="" />


                    <div class="info">
                        <br /><br /><h2> Description</h2><hr />
                        <ul>
                            <li><strong>Name : </strong>{this.state.Papers.authorname} </li>
                            <li><strong>Email : </strong>{this.state.Papers.email}</li>
                            <li><strong>Designation: </strong>{this.state.Papers.Designation}</li>


                        </ul>
                    </div>
                </div>

                
                <div class="control">

<a href={this.state.Papers.url}><button class="btn1">
    <span class="shopping-cart"><i class="fa fa-download" aria-hidden="true"></i></span>
    <span class="buy">Download</span>
</button></a>

</div>
            </div>





        )
    }
}

export default onepaper;