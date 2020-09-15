import React, {  useRef, useState } from 'react';
import {  FormGroup } from '@material-ui/core';
import './Auth.css'
import * as firebase from "firebase/app";
import "firebase/auth"
import { useHistory, useLocation } from 'react-router-dom';

const Auth = () => {
    const [haveAccount, setHaveAccount]=useState(false)
    const [loggedIn, setLoggedIn]=useState(false)

    const [user,setUser]=useState({})

    


    const [submiter, setSubmiter]=useState("")

        const submitHandler=(event)=>{
            setSubmiter(event.target.name)
        }

        const [emailChecker,setEmailChecker]=useState(true)
        const history=useHistory()
        const {pathname}=useLocation().state.from
        const formHandler=(event)=>{
            event.preventDefault()
            const emailCheck=RegExp(/\S+@\S+\.\S+/).test(user.email)
            setEmailChecker(emailCheck)

                    if(submiter=="signin" && emailCheck){
                    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                    .then(res=>{
                        setLoggedIn(true)
                        localStorage.setItem("loggedIn",true)
                        history.replace(pathname)
                    })
            }


            if(submiter=="signup" && emailCheck){
                if(user.password==user.confirmPassword){
                    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                    .then(res=>{
                        const userInfo = firebase.auth().currentUser;
                        userInfo.updateProfile({
                        displayName: user.username || "Food Lover",
                        photoURL: "https://example.com/jane-q-user/profile.jpg"
                        
                        })
                        setHaveAccount(true)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                 }else{
                     setUser({...user,passConfError:"doesn't match password"})
                 }
                }

            }




    return (
        <form className="form-container" onSubmit={formHandler}>
            <FormGroup style={{width:"350px", margin:"auto", marginTop:"40px"}}>
             
                
            {
                emailChecker ? <input type="email" onBlur={(event)=>setUser({...user,email:event.target.value})} placeholder="Enter email address" required/>

                : <input type="email" style={{border:"1px solid red", borderRadius:"5px"}} onBlur={(event)=>setUser({...user,email:event.target.value})} onClick={()=>setEmailChecker(true)} placeholder="Enter email address" required/>
            }

            {
                haveAccount ? ""
                    :<input type="text" onBlur={(event)=>setUser({...user,username:event.target.value})} placeholder="Enter user name" />
                  
            }

                <input type="password" onBlur={(event)=>setUser({...user,password:event.target.value})} placeholder="Enter user password" required/>
            

            {
                haveAccount ? ""
                    :<input type="password" onBlur={(event)=>setUser({...user,confirmPassword:event.target.value})} onClick={(event)=>setUser({...user,passConfError:""})} placeholder="Confirm your password" required/>
                  
            }
            {
                user.passConfError && <p style={{color:"red", textAlign:"center"}}>{user.passConfError}</p>
            }
            
            {
                haveAccount ? <input onClick={submitHandler} name="signin" type="submit" value="Signin"/>
                : <input onClick={submitHandler} name="signup" type="submit" value="Signup"/>
            }

            {
                haveAccount ? <p onClick={()=>setHaveAccount(false)} style={{color:"#DC143C", cursor:"pointer", textAlign:"center"}}>Don't have any account</p>

                : <p onClick={()=>setHaveAccount(true)} style={{color:"#DC143C",cursor:"pointer", textAlign:"center"}}>Already have an account</p>
            }
            </FormGroup>
        </form>
    );
};

export default Auth;