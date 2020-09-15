import React, { createContext, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import Auth from './Components/Auth/Auth';
import * as firebase from "firebase/app";
import "firebase/auth"
import firebaseConfig from './firebase.config'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ProceedOrder from './Components/ProceedOrder/ProceedOrder';
import OrderPlaced from './Components/OrderPlaced/OrderPlaced';
firebase.initializeApp(firebaseConfig);
export const MyContext=createContext()
function App() {
  
const [cartLength,setCartLength]=useState(JSON.parse(localStorage.getItem("listedFood"))?.length)
  
  return (
   <MyContext.Provider value={[cartLength,setCartLength]}>
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
        
        <PrivateRoute path="/proceed-order">
          <ProceedOrder></ProceedOrder>
        </PrivateRoute>

        <PrivateRoute path="/order-placed">
          <OrderPlaced></OrderPlaced>
        </PrivateRoute>
        
      </Switch>
    </Router>
   </MyContext.Provider>
  );
}

export default App;
