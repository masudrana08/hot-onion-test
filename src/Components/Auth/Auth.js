import React, {  useRef, useState } from 'react';
import {  FormGroup } from '@material-ui/core';
import './Auth.css'
import * as firebase from "firebase/app";
import "firebase/auth"

const Auth = () => {
    const [haveAccount, setHaveAccount]=useState(false)
    const [loggedIn, setLoggedIn]=useState(false)

    const [user,setUser]=useState({})

    


    const [submiter, setSubmiter]=useState("")
        const submitHandler=(event)=>{
            setSubmiter(event.target.name)
        }

        const formHandler=(event)=>{
            event.preventDefault()
            
            if(submiter=="signin"){

                    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                    .then(res=>{
                        console.log(res)
                    })
            }


            if(submiter=="signup"){
                if(user.password==user.confirmPassword){
                    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                    .then(res=>{
                        const userInfo = firebase.auth().currentUser;
            
                        userInfo.updateProfile({
                        displayName: user.username || "Food Lover",
                        photoURL: "https://example.com/jane-q-user/profile.jpg"
                        })
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
            
            <input onBlur={(event)=>setUser({...user,email:event.target.value})} placeholder="Enter email address" required/>
            

            {
                haveAccount ? ""
                    :<input onBlur={(event)=>setUser({...user,username:event.target.value})} placeholder="Enter user name" />
                  
            }

                <input onBlur={(event)=>setUser({...user,password:event.target.value})} placeholder="Enter user password" />
            

            {
                haveAccount ? ""
                    :<input onBlur={(event)=>setUser({...user,confirmPassword:event.target.value})} onClick={(event)=>setUser({...user,passConfError:""})} placeholder="Confirm your password" />
                  
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