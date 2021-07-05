import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Researcher from './component/Researcher';
import ResearchReviewer from './component/Reviewer';
import paper from './component/paperDetails';
import normal from './component/normal';
import NavbarVertical from './component/verticalnav1';
import login from './component/login';
import approved from './component/approved';
import payment from './component/paymentform';
import { Box } from "@material-ui/core";
import loginnav from './loginnav';
import notapproved from './component/not approved';


export default class loginnav1 extends React.Component {
   constructor(props) {
      super(props);
   }

   // componentDidMount() {
   //     const Email=`${this.props.match.params.email}`
   //      this.setState({ email: Email });
   //      console.log(this.state.email);

   //  }
   render() {
      return (
         <div className="App">
            <Router>


               <div class="row">
                  <div class="col col-lg-2"><NavbarVertical /></div>
                  <div class="col">

                     <Box width="100%">



                        

                           <Switch>
                              <span>

                                 <Route path='/approved/:email' component={approved} />
                                 <Route path='/notapprove/:email' component={notapproved} />
                                 <Route path='/payment/:id' component={payment} />
                                 <Route path='/create-researcher' component={Researcher} />

                              </span>




                           </Switch>

                       

                     </Box>
                  </div>
               </div>

            </Router>


         </div>

      )
   }
}
