import React,{useState} from "react"
import axios from "axios"


function Register() {

    const [username , setUsernameReg] = useState("");
    const [password , setPasswordReg] = useState("");
    const [usertype , setUsertypeReg] = useState("");

    function register(e){
        e.preventDefault();

        const newUser = {
            username,
            password,
            usertype
        }

        axios.post("https://blackpanthers-icaf.herokuapp.com/user/register",newUser).then(()=>{
            alert("User Added")
            window.location='/loginf' 
        }).catch((err) =>{
            alert(err)
        })
    }
    
      return (
        
        <div >
          <style>{'body {background: linear-gradient(to top left, #000066 0%, #660066 100%)'}</style>
            <div className="row" align="center"  >  
         <div className="col p-1" style={{ backgroundImage: `url("https://image.freepik.com/free-vector/computer-programming-camp-illustration_335657-434.jpg")` }}></div>
         <div className="col p-2 pb-2" >


              <div class="card border-warning w-75 m-2 mb-2 bg-transparent  text-white border-secondary mb-3 align-items-center" color="blue">
          <div className="m-5 w-75 align-items-center">
            <h1>Registration</h1>
            <div className="m-5 w-75 align-items-center" >
            <label className="form-label">Username</label>
            <input type="text" className="form-control" onChange={(e) => {
                setUsernameReg(e.target.value);
            }}></input>
            </div>
            <div className="m-5 w-75 align-items-center" >
            <select class="form-select" aria-label="Default select example" name="usertype" onChange={(e) => {setUsertypeReg(e.target.value)}}>
                        <option selected>Register as</option>
                        <option value="Workshopper">Workshop Conductor</option>
                        <option value="Researcher">Researcher</option>

            </select>             </div>
            <div className="m-5 w-75 align-items-center" >
            <label className="form-label">Password</label>
            <input type="password" className="form-control" onChange={(e) => {
                setPasswordReg(e.target.value);
            }}></input>
            </div>
            <button className="btn btn-primary m-3" onClick={register}>Register <i class="fas fa-angle-double-right"></i></button>
            <h6>Register as <a className="text-decoration-none" href="/attendee">Attendee</a> </h6>

          </div>         
          </div>
          </div>
        </div>
        </div>
     


      );
    }
    
    export default Register;