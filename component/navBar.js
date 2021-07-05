import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <nav class="navbar sticky-top navbar-expand-lg navbar navbar-dark bg-dark ">
          <a class="navbar-brand" href="/">ICAF</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
  
  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Researcher
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/approvedpaid">Research Papers</a>
                  <a class="dropdown-item" href="/download">Download page</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="/loginf">Upload Research papers</a>
                </div>
              </li>
  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Workshoper
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/workshop">Workshop details</a>
                  <a class="dropdown-item" href="/workshopdownload">Download page</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="/loginf">Upload Workshop</a>
                </div>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/attendee">Attendee</a>
              </li>
            </ul>
            <div align="right">
              <li><a className="text-decoration-none" href="/loginf" ><i class="fas fa-sign-out-alt"></i><span>Login</span></a></li></div>
              <div align="right">  <li><a className="text-decoration-none" href="/register"><i  class="fas fa-user-plus"></i><span>Sign Up</span></a></li>
             
            </div>
          </div>
        </nav>
      )
    }

}

export default Navbar;