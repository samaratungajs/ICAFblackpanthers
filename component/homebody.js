import React, { Component } from 'react';
import axios from 'axios';
import '../css/styles.css';
class homebody extends Component {
    constructor(props) {
        super(props);
        this.state ={
            conference:[]
        }
    }

    componentDidMount(){
        axios.get('https://blackpanthers-icaf.herokuapp.com/conferenced/conference')
        .then(response => {
            this.setState({conference : response.data.data })
        })
    }
    render() {
      return (
    <div>
        
        <div id="carouselExampleControls" class="carousel  "  data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src="https://static.sliit.lk/wp-content/uploads/2018/11/05120533/17.jpg" alt="First slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://static.sliit.lk/wp-content/uploads/2017/10/sliit-research-business-faculty.jpg" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://static.sliit.lk/wp-content/uploads/2018/01/Faculty-Societies.jpg" alt="Third slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        <section class="page-section text-white bg-dark" id="services ">
        {this.state.conference.length > 0 && this.state.conference.map((item, index) => (

            <div class="container ">
                
                <div class="text-center">
                    <h1 class="section-heading text-uppercase">ICAF</h1>
                    <h2 class="section-subheading text-muted">International Conference on Application Frameworks</h2>
                    <h3 class="section-heading text-uppercase">Starting on {item.FromDate}</h3>
                </div>
                
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            {/* <i class="fas fa-circle fa-stack-1x text-primary"></i> */}
                            <i class="fa fa-graduation-cap fa-stack-1x fa-inverse" ></i>
                        </span>
                        <h4 class="my-3">Graduated Guidance</h4>
                        <p class="text-muted">Undergraduate Masters and PhD Aspirants: The students can register with us We will guide them to improve their CV and profile.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            {/* <i class="fas fa-circle fa-stack-1x text-primary"></i> */}
                            <i class="fa fa-code fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Hackathon</h4>
                        <p class="text-muted">Hackathons which help you put your coding skills to work. Solve interesting business problems and real-world challenges. </p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            {/* <i class="fas fa-circle fa-stack-1x text-primary"></i> */}
                            <i class="far fa-handshake fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Collaborative Studies</h4>
                        <p class="text-muted">The purpose of the conference is to promote, in an international world-wide context, activities and exchanges in all fields related to speech communication science and technology.</p>
                    </div>
                </div>
            </div>
            ))}
        </section>
        <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">KEY NOTE SPEAKERS</h2>
                    <h3 class="section-subheading text-muted">Here are some of our speakers</h3>
                </div>
                <div class="card-group">
                <div class="card text-white bg-dark">
                    <img class="card-img-top" src="https://mercon.uom.lk/img/speakers/2.png" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Dr. Upendra Pieris</h5>
                    <p class="card-text">Dr. Upendra Pieris is an experienced Vice President with a demonstrated history of working in the information technology and services industry. Skilled in Technical Documentation, Customer Relationship Management (CRM), People Management, Documentation, and IT Service Management.</p>
                    <p class="card-text"><small class="text-muted">Vice President, OREL IT</small></p>
                    </div>
                </div>
                <div class="card text-white bg-dark">
                    <img class="card-img-top" src="https://mercon.uom.lk/img/speakers/3.jpg" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Prof William Wong</h5>
                    <p class="card-text">Prof. B.L. William Wong PhD BCom (Hons) FBCS FNZCS is Professor of Human-Computer Interaction and Head Interaction Design Centre. He is also Principal Scientist at Genetec, Inc</p>
                    <p class="card-text"><small class="text-muted">Middlesex University London</small></p>
                    </div>
                </div>
                <div class="card text-white bg-dark">
                    <img class="card-img-top" src="https://mercon.uom.lk/img/speakers/1.png" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Prof. John L. Volakis</h5>
                    <p class="card-text">Prof. John initially trained as an electrical and electronic engineer at Canterbury University to pursue his interest in robotics. he then worked at Transpower, Électricité de Tahiti, and Robotechnology.</p>
                    <p class="card-text"><small class="text-muted">Florida International University,USA</small></p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section class="page-section text-white bg-dark " id="about">
        {this.state.conference.length > 0 && this.state.conference.map((item, index) => (

            <div class="container ">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">About</h2>
                    <h3 class="section-subheading text-muted">{item.about}</h3>
                </div>
                <ul class="timeline">
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="https://image.shutterstock.com/image-vector/start-icon-symbol-flat-vector-260nw-270857945.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2020 - 2021</h4>
                                <h4 class="subheading">Our Humble Beginning</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Establish as a collaboration with SLIIT FLOSS Community and SE student community </p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="https://media.istockphoto.com/vectors/green-checkmark-vector-illustration-vector-id1133442802?k=6&m=1133442802&s=612x612&w=0&h=R_gRPh_BaMccsji54rKJLhOArLVx1C7Jh-5ZXNC423g=" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>{item.FromDate}</h4>
                                <h4 class="subheading">Conference begins</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">With the precence of our honorable guests</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="data:image/png;base64,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" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>Conference Venue</h4>
                                <h4 class="subheading">At {item.venue} Premises</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">We are a leading non-state higher education institute approved by the University Grants Commission (UGC) under the Universities Act.</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="data:image/png;base64,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" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>{item.ToDate}</h4>
                                <h4 class="subheading">Conference Ends</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">After providing many oppertunites to SE student community</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
          ))}
          </section>
        <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted">SLIIT UNIVERSITY UNDERGRADUATES</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="https://i2.wp.com/icac.lk/wp-content/uploads/2021/04/Prof-William_Wong-200x200.jpg" alt="..." />
                            <h4>Parveen Anand</h4>
                            <p class="text-muted">Lead Designer</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="https://i1.wp.com/icac.lk/wp-content/uploads/2021/04/Dr-Elizabeth.png?w=200&ssl=1" alt="..." />
                            <h4>Diana Petersen</h4>
                            <p class="text-muted">Lead Marketer</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="https://i2.wp.com/icac.lk/wp-content/uploads/2021/04/Dr-Upendra.jpg?resize=212%2C212&ssl=1" alt="..." />
                            <h4>Larry Parker</h4>
                            <p class="text-muted">Lead Developer</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Faculty of Computing, Faculty of Graduate Studies and Senate Research Committee, SLIIT</p></div>
                </div>
            </div>
        </section>
        <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">Copyright &copy; ICAF SLIIT 2021</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="https://www.sliit.lk/"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.sliit.lk/"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.sliit.lk/"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <div class="col-lg-4 text-lg-end">
                        <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>

        </div>
          )
    }
}

export default homebody;