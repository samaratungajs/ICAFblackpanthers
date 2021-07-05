import React, { Component } from 'react';
import axios from 'axios';
import downloadcss from '../../css/workshop'



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
                                    <img class="card-img-top " src="https://image.freepik.com/free-psd/photographer-workshop-with-notebook-mock-up_23-2149015920.jpg" alt="Card image cap" />
                                    <a>
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>




                                <div class="card-body">


                                    <h5 class="card-title"><i class="fas fa-file-pdf"> </i> Details</h5>
                                    <hr />

                                    <p class="card-text"><h6>Workshop Evaluation Form</h6></p>
                                    <p class="card-text">Size: 63KB</p>

                                    <p class="card-text">
                                        <a href="https://images.sampletemplates.com/wp-content/uploads/2015/09/22144210/WorkshopEvaluationForm.pdf.zip"><i class="fa fa-download"></i></a></p>





                                </div>


                            </div>


                        </div>
                        < div class="col-lg-3 m-5 ">
                            <div class="card   fade-in border-dark m-1 p-2"   id="workshop">


                                <div class="view overlay ">
                                    <img class="card-img-top " src="https://as2.ftcdn.net/v2/jpg/01/01/90/57/1000_F_101905720_KCOmjAhaO9rxakCu0YUu26MGYSd8T4de.jpg" alt="Card image cap" />
                                    <a>
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>




                                <div class="card-body">


                                    <h5 class="card-title"><i class="fas fa-file-pdf"> </i> Details</h5>
                                    <hr />
                                
                                    <p class="card-text"><h6> Workshop ToDo sheet</h6></p>
                                    <p class="card-text">Size: 61KB</p>

                                    <p class="card-text">
                                        <a href="https://trumpexcel.com/wp-content/uploads/2015/09/Excel-To-Do-List-Template-Print.xlsx"><i class="fa fa-download"></i></a></p>





                                </div>


                            </div>


                        </div>
                        < div class="col-lg-3 p-5">
                            <div class="card   fade-in border-dark m-1 p-2 "  id="workshop">


                                <div class="view overlay ">
                                    <img class="card-img-top " src="https://image.freepik.com/free-psd/creative-concept-social-media-instagram-post-digital-marketing-promotion-template_401956-37.jpg" alt="Card image cap" />
                                    <a>
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>




                                <div class="card-body">


                                    <h5 class="card-title"><i class="fas fa-file-pdf"> </i> Details</h5>
                                    <hr />

                                    <p class="card-text"><h6>Workshop Presentation template</h6></p>
                                    <p class="card-text">Size: 53KB</p>

                                    <p class="card-text">
                                        <a href="https://drive.google.com/uc?export=download&id=1w5lx0oDgLn1CnvABma2pW8B8bfrK4Dod"><i class="fa fa-download"></i></a></p>





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