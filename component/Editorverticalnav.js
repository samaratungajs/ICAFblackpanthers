import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from "axios"

const VerticalNavbar= () => {

    const access_token = localStorage.getItem('token')
    const[username , setUsername] = useState("")

        let config = {
          headers: {
            'Authorization': 'Bearer ' + access_token
          }
        }
        axios.get( 
            'https://blackpanthers-icaf.herokuapp.com/user/post',
            config)
          .then( ( response ) => {
            if(response.data.message){
                alert(response.data.message)  
            }else{   
              setUsername(response.data.user.username)
            }         
          } )
          .catch()
         
     

        return (
           
            <div className="navbar-nav sidebar accordion" id="accordionSidebar">
               
        <ul className="navbar-nav bg-dark sidebar sidebar-dark accordion" id="accordionSidebar">
       <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
           <div class="sidebar-brand-icon rotate-n-15">
               <i class="fas fa-laugh-wink"></i>
           </div>
                        <div class="sidebar-brand-text mx-3">Editor </div><br/>
                     
                        
                    </a>
                    
                    <hr class="sidebar-divider my-0"/>
       <li class="nav-item active">
           <a class="nav-link" href="index.html">
               <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>DashBoard</span></a>
                          
       </li>
     
       <hr class="sidebar-divider my-0"/>
       <li class="nav-item active">
           <a class="nav-link" href="index.html">
             
          <div >{username}</div> 
                           </a>
                          
       </li>
       <hr class="sidebar-divider"/>
       <div class="sidebar-heading">
           Interface
       </div>
     
       <li class="nav-item">
          
                   <a class="nav-link collapsed" href="/create-editor">Add Conference details</a>
                   <a class="nav-link collapsed" href="/editorall">View Conference details</a>
                   
             
                    </li>
            <li class="nav-item">
          
             <div>
             <a class="nav-link collapsed" href="/Loginf" >Logout</a>
         
      
                   
               </div>
           
       </li>
      
       
  </ul>
       </div>
       )
    


}

export default VerticalNavbar;