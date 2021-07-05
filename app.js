import React from 'react';
import Navbar from './component/navBar';
import Homebody from './component/homebody';
import GetWorkshop from './component/getworkshop/getallworkshop';
import GetWorkshopByID from './component/getworkshop/workshopStatus';
import ShowApproved from './component/getworkshop/showapproved';
import Viewdetails from './component/getworkshop/viewdetails'
import Download from './component/dowloads/dowload'
import LoginNav from './loginnav'
import Login from './component/login/login'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Researcher from './component/Researcher';
import ResearchReviewer from './component/Reviewer';
import paper from './component/paperDetails';
import Researchlogin from './component/login';
import approved from './component/approved';
import loginnav1 from './loginnav1';
import approvepaid from './component/paidallapproved';
import onepaper from './component/onepaper';
import download from './component/Download';

import LoginF from './component/loginComponent/login'
import MainPageF from './component/loginComponent/mainPage'
import RegisterF from './component/loginComponent/register'

import MainPanel from './MainPanel'
import AddAdministrator from './component/adminComponent/addAdministrators';
import ViewAdministrator from './component/adminComponent/viewAdministrators';
import ChartsPage from './component/adminComponent/charts';
import RevenuechartsPage from './component/adminComponent/revenueCharts';
import UpdateAdministrator from './component/adminComponent/updateAdministrator';
import ViewConfDetails from './component/adminComponent/viewConfDetails';
import workshoptype from './component/adminComponent/viewWorkshops';
import dashboardcp from './component/adminComponent/dashboard'
import Reviewer from './Reviewer'

import CreateEditor from './component/createeditor/createeditor';
import getAllDetails from './component/getAllDetails/getAllDetails';
import editDetails from './component/editDetails/editDetails'
import Editor from './Editor'
import Attendee from './component/loginComponent/createAttendee'

export default class App extends React.Component { 
    constructor(props) { super(props); 
    } 
    
    render() { 
        return( 
            <div>
                
                <Router>
                
      
               
                 
                 <Navbar/>
                 <Switch>
                  <Route path ="/" component={Homebody} exact/>
                     <Route path ="/create-workshop" component={LoginNav} exact/>
                     <Route path ="/all" component={Reviewer} exact />
                     <Route path ="/login" component={Login}  exact/>
                     <Route path ="/workshopdownload" component={Download}  exact/>
                     <Route path ="/workshop" component={ShowApproved} exact />
                     <Route path ="/Reviewer" component={Reviewer} exact />
                     <Route path="/attendee" exact component={Attendee}></Route>

                     <Route path="/register" exact component={RegisterF}></Route>
                        <Route path="/loginf" exact component={LoginF}></Route>
                        <Route path="/mainPage" exact component={MainPageF}></Route>

                        <Route path ="/create-editor" component={Editor} exact/>
                        <Route path ="/editorall" component={Editor} exact />
                        <Route path ="/editor/:id" component={Editor} exact />
                        <Route path ="/Editor" component={Editor} exact />


                        <Route path="/admin-dashboard" component={dashboardcp} exact /> 
                        <Route path="/create-admin" component={AddAdministrator} exact /> 
                        <Route path="/view-admin" component={ViewAdministrator} exact /> 
                        <Route path="/update/:id" component={UpdateAdministrator} exact /> 
                        <Route path="/viewStats" component={ChartsPage} exact /> 
                        <Route path="/viewPayment" component={RevenuechartsPage} exact /> 
                        <Route path="/viewConference" component={ViewConfDetails} exact />
                        <Route path="/viewWorkshop" component={workshoptype} exact /> 
   

                     <Route path='/approved/:email' component={loginnav1} />
                     <Route path='/payment/:id' component={loginnav1} />
                     <Route path='/create-researcher' component={loginnav1} />
                     <Route path='/notapprove/:email' component={loginnav1} />
                     <Route path='/Researchlogin' component={Researchlogin} />
                     <Route path='/approvedpaid' component={approvepaid} />
                     <Route path='/download' component={download} />
                     <Route path='/get-Reviewer' component={Reviewer} exact />
                     <Route path='/onepaper/:id' component={onepaper} />
                     <Route path='/paper/:id' component={Reviewer} exact />


                     <Route path ="/workshop/:id" component={Reviewer}  exact/>               
                     <Route path ="/shows/:id" component={Viewdetails}  exact/>
                     <Route path ="/approve/:email" component={LoginNav} exact />
                     <Route path ="/unapprove/:email" component={LoginNav}  exact/>


                </Switch>   
                

                </Router>
            </div>
       
        );
     } 
    }