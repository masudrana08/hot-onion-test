import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import Auth from './Components/Auth/Auth';
import * as firebase from "firebase/app";
import "firebase/auth"
import firebaseConfig from './firebase.config'
function App() {
  firebase.initializeApp(firebaseConfig);
  
  return (
   <Router>
     <Header></Header>
     <Switch>

       <Route exact path="/">
          <Home></Home>
       </Route>
      
       <Route path="/food/:id">
          <FoodDetails></FoodDetails>
       </Route>

       <Route path="/auth">
          <Auth></Auth>
       </Route>

     </Switch>
   </Router>
  );
}

export default App;
