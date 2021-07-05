import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import "animate.css";
import 'react-notifications-component/dist/theme.css'
import React, { Component } from 'react';


function Notify() {
    const onclickhandledefault = () => {
      store.addNotification({
        title: "There are conference details",
        message: "To be Approved",
        type:"info",
        container: "top-right",
        insert: "top",
        animationIn: ["animated", "fadein"],
        animationOut: ["animated", "fadeout"],
        
        dismiss: {
          duration: 2000,
          showIcon:true
        },
        width: 600,
       
      })
    }
    const onclick = () => {
      store.addNotification({
        content:Mynotify,
      type:"success",
        container: "bottom-left",
        insert: "top",
        animationIn: ["animated", "fadein"],
        animationOut: ["animated", "fadeout"],
        
        dismiss: {
          duration: 2000,
          showIcon:true
        },
       
       
      })
    }
    return (
      <div>  
        <a class="nav-link" onClick={onclickhandledefault}>
           <div ><i class="fas fa-envelope-square" ></i></div>
            <span></span>
          </a>
        
      </div>
    )
  }
  
  function Mynotify() {
    return (
      <div className="bg-primary text-white">
        <h1>new card added</h1>
        <h4>Tpm added the card</h4>
      </div>
    )
  }

  export default Notify;
