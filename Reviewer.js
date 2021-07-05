import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarVertical from './component/navbar/verticalnav';
import { Box } from "@material-ui/core";
import ReviewerVerticalbar from './component/Reviewververticalnav';
import ResearchReviewer from './component/Reviewer';
import GetWorkshop from './component/getworkshop/getallworkshop';
import paper from './component/paperDetails';
import GetWorkshopByID from './component/getworkshop/workshopStatus';
export default class loginnav extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div className="App">
                <Router>


                    <div class="row">
                        <div class="col col-lg-2"><ReviewerVerticalbar /></div>
                        <div class="col">

                            <Box width="100%">

                               

                                    <Switch>
                                        <span>
                                      
                                        <Route path='/get-Reviewer' component={ResearchReviewer} exact />
                                        <Route path="/all" component={GetWorkshop} exact />
                                        <Route path='/paper/:id' component={paper} exact/>
                                      
                                        <Route path ="/workshop/:id" component={GetWorkshopByID} exact  /> 
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