import React, { Component } from 'react';
import axios from 'axios';
import downloadcss from '../css/workshop'



//Displays Research paper templates
class Paper extends Component {
    constructor(props) {
        super(props);

        this.state = {

            Papers: ''
        }
    }



    render() {
      
        return (
         
            <div  >
                  <style>{'body { background-color: #000033; }'}</style>
                <div  ><css/><br />
                    <div class="row m-3" >

                        < div class="col-lg-3 m-5">
                            <div class="card   fade-in border-dark m-1 p-1 " id="workshop" align="left">


                                <div class=" border-secondary view overlay">
                                    <img class="card-img-top " src="https://image.freepik.com/free-photo/blank-notebook-yellow-pencil-brown-wood-flat-lay-photo-notebook-your-messag_7182-2040.jpg" alt="Card image cap" />
                                    <a>
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>




                                <div class="card-body">


                                    <h5 class="card-title"><i class="fas fa-file-pdf"> </i> Details</h5>
                                    <hr />

                                    <p class="card-text"><h6>Career Research Paper Outline</h6></p>
                                    <p class="card-text">Size: 63KB</p>

                                    <p class="card-text">
                                        <a href="https://images.template.net/wp-content/uploads/2017/06/Career-Research-Paper-Outline1.zip"><i class="fa fa-download"></i></a></p>





                                </div>


                            </div>


                        </div>
                        < div class="col-lg-3 m-5 ">
                            <div class="card   fade-in border-dark m-1 p-2"   id="workshop">


                                <div class="view overlay ">
                                    <img class="card-img-top " src="https://i.pinimg.com/736x/b4/98/90/b49890d6fe75cd6501081e5d62e31bab.jpg" alt="Card image cap" />
                                    <a>
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>




                                <div class="card-body">


                                    <h5 class="card-title"><i class="fas fa-file-pdf"> </i> Details</h5>
                                    <hr />
                                
                                    <p class="card-text"><h6> Basic Research Paper Outline</h6></p>
                                    <p class="card-text">Size: 61KB</p>

                                    <p class="card-text">
                                        <a href="https://images.template.net/wp-content/uploads/2017/06/Basic-Research-Paper-Outline.zip"><i class="fa fa-download"></i></a></p>





                                </div>


                            </div>


                        </div>
                        < div class="col-lg-3 p-5">
                            <div class="card   fade-in border-dark m-1 p-2 "  id="workshop">


                                <div class="view overlay ">
                                    <img class="card-img-top " src="https://image.freepik.com/free-photo/laptop-with-papers-with-graphics-top_1232-1382.jpg" alt="Card image cap" />
                                    <a>
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>




                                <div class="card-body">


                                    <h5 class="card-title"><i class="fas fa-file-pdf"> </i> Details</h5>
                                    <hr />

                                    <p class="card-text"><h6>Business Research Paper Outline</h6></p>
                                    <p class="card-text">Size: 50KB</p>

                                    <p class="card-text">
                                        <a href="https://images.template.net/wp-content/uploads/2017/06/International-Business-Research-Paper.zip"><i class="fa fa-download"></i></a></p>





                                </div>


                            </div>


                        </div>
                    </div>



                </div>

            </div>

        )

    }
}

export default Paper;