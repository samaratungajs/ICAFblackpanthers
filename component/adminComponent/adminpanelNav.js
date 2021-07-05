import React, { Component } from 'react';


class AdminPanel extends Component {
    constructor(props) {
        super(props);

    }

    render() {
          return (
              
            <div className="navbar-nav sidebar accordion" id="accordionSidebar" style={{position: "sticky"}}>
             <ul className="navbar-nav bg-dark sidebar sidebar-dark accordion" id="accordionSidebar">
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/admin-dashboard">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Admin Panel </div>
            </a>
            <hr class="sidebar-divider my-0"/>
            <li class="nav-item active">
                <a class="nav-link" href="/admin-dashboard">
                <div align="center"> <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span> </div></a>
            </li>
            <hr class="sidebar-divider"/>
            <div class="sidebar-heading">
                Manage
            </div>
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-user"></i>
                    <span>Administrators</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Manage Administrators:</h6>
                        <a class="collapse-item" href="/create-admin">Add Administrators</a>
                        <a class="collapse-item" href="/view-admin">View Administrators</a>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/viewWorkshop">
                    <i class="fas fa-landmark"></i>
                    <span>Workshops</span>
                    </a>
            </li>
            <hr class="sidebar-divider d-none d-md-block"/>
            <div class="sidebar-heading">
                Approve
            </div>
            <li class="nav-item">
                <a class="nav-link" href="/viewConference">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Conference Details</span>
                    </a>
            </li>
            <hr class="sidebar-divider"/>
            <div class="sidebar-heading">
                Statistics
            </div>
      
            <li class="nav-item">
                <a class="nav-link" href="/viewStats">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Conference Statistics</span>
                    </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/viewPayment">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Research Statistics</span>
                    </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/loginf">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Admin Logout</span>
                    </a>
            </li>
           
       </ul>
            </div>
            
          )
    }
}

export default AdminPanel;