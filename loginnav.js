import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarVertical from './component/navbar/verticalnav';
import { Box } from "@material-ui/core";
import GetApproveEmail from './component/getworkshop/showapprovedbyEmail'
import GetUnApproveEmail from './component/getworkshop/showunapprovebyEmail'
import CreateWorkshop from './component/createworkshop/createworkshop';

export default class loginnav extends React.Component {
    constructor(props) {
        super(props);
    }

    
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

                                            <Route path="/create-workshop" component={CreateWorkshop} exact />
                                            <Route path="/approve/:email" component={GetApproveEmail} />
                                            <Route path="/unapprove/:email" component={GetUnApproveEmail} />

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