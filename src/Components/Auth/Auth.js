import React, { useRef, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Button, FormGroup, Input, InputLabel } from '@material-ui/core';
import './Auth.css'
import * as firebase from "firebase/app";
import "firebase/auth"

const Auth = () => {
    const [haveAccount, setHaveAccount]=useState(false)
    const [loggedIn, setLoggedIn]=useState(false)

    const [user,setUser]=useState({})

    const signupHandler=()=>{
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

    const signinHandler=()=>{
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res=>{
            console.log(res)
        })
    }

console.log(user)
    return (
        <FormGroup style={{width:"350px", margin:"auto", marginTop:"40px"}}>
            <FormControl style={{marginBottom:"10px"}}>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input onBlur={(event)=>setUser({...user,email:event.target.value})} variant="outlined" aria-describedby="my-helper-text"  />
            </FormControl>

            {
                haveAccount ? ""
                : <FormControl style={{marginBottom:"10px"}}>
                    <InputLabel htmlFor="my-input">User name</InputLabel>
                    <Input onBlur={(event)=>setUser({...user,username:event.target.value})} variant="outlined" id="my-input" aria-describedby="my-helper-text" />
                  </FormControl>
            }

            <FormControl style={{marginBottom:"10px"}}>
                <InputLabel htmlFor="my-input">User password</InputLabel>
                <Input onBlur={(event)=>setUser({...user,password:event.target.value})} variant="outlined" id="my-input" aria-describedby="my-helper-text" />
            </FormControl>

            {
                haveAccount ? ""
                : <FormControl style={{marginBottom:"10px"}}>
                    <InputLabel htmlFor="my-input">Confirm password</InputLabel>
                    <Input onBlur={(event)=>setUser({...user,confirmPassword:event.target.value})} onClick={(event)=>setUser({...user,passConfError:""})} variant="outlined" id="my-input" aria-describedby="my-helper-text" />
                  </FormControl>
            }
            {
                user.passConfError && <p style={{color:"red", textAlign:"center"}}>{user.passConfError}</p>
            }
            
            {
                haveAccount ? <Button onClick={signinHandler} variant="contained" color="secondary">Signin</Button>
                : <Button onClick={signupHandler} variant="contained" color="secondary">Signup</Button>
            }
            {
                haveAccount ? <p onClick={()=>setHaveAccount(false)} style={{color:"#DC143C", cursor:"pointer", textAlign:"center"}}>Don't have any account</p>

                : <p onClick={()=>setHaveAccount(true)} style={{color:"#DC143C",cursor:"pointer", textAlign:"center"}}>Already have an account</p>
            }
        </FormGroup>
    );
};

export default Auth;