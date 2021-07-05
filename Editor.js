import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from "@material-ui/core";
import EditorVerticalbar from './component/Editorverticalnav';

import CreateEditor from './component/createeditor/createeditor';
import getAllDetails from './component/getAllDetails/getAllDetails';
import editDetails from './component/editDetails/editDetails'

export default class loginnav extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div className="App">
                <Router>


                    <div class="row">
                        <div class="col col-lg-2"><EditorVerticalbar/></div>
                        <div class="col">

                            <Box width="100%">

                               

                                    <Switch>
                                        <span>
                                      
                                        <Route path ="/create-editor" component={CreateEditor} exact/>
                                        <Route path ="/editorall" component={getAllDetails} exact />
                                            <Route path ="/editor/:id" component={editDetails} exact />
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