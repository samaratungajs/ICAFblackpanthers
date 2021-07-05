import React from 'react';
import Navbar from './component/adminComponent/navBar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddAdministrator from './component/adminComponent/addAdministrators';
import ViewAdministrator from './component/adminComponent/viewAdministrators';
import AdminPanel from './component/adminComponent/adminpanelNav';
import {Box} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import ChartsPage from './component/adminComponent/charts';
import RevenuechartsPage from './component/adminComponent/revenueCharts';
import UpdateAdministrator from './component/adminComponent/updateAdministrator';
import ViewConfDetails from './component/adminComponent/viewConfDetails';
import workshoptype from './component/adminComponent/viewWorkshops';
import dashboardcp from './component/adminComponent/dashboard'

function MainPanel() {
    // const classes = useStyles();
    return(
       <div className="wrapper">         
            <Router> 

            <div className="row">
             <div className="col col-lg-2"><AdminPanel/></div>
            <div className="col">
            
            
            <Box width="100%">
               <Navbar/>
            <section>
            <Switch>
             <Route path="/create-admin" component={AddAdministrator} exact /> 
             <Route path="/view-admin" component={ViewAdministrator} exact /> 
             <Route path="/update/:id" component={UpdateAdministrator} exact /> 
             <Route path="/viewStats" component={ChartsPage} exact /> 
             <Route path="/viewPayment" component={RevenuechartsPage} exact /> 
             <Route path="/viewConference" component={ViewConfDetails} exact />
             <Route path="/viewWorkshop" component={workshoptype} exact /> 
             <Route path="/admin-dashboard" component={dashboardcp} exact /> 
             {/* <Route path="/" component={dashboardcp} exact />  */}


            </Switch>
            </section>
            </Box>
            </div>
            </div>
                    
            </Router> 
            
           
        </div>
    );
}

export default MainPanel;