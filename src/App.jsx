import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const cart = useSelector(state => state.cart)
  const isLoggedIn = useSelector(state =>state.auth.isLoggedIn)
  const cartItems = useSelector((state)=>state.cart.itemsList)
  console.log(isLoggedIn);

  useEffect(()=>{
    fetch('',{
      method:'GET',
     // body:
    })

  },[cart])
  return (
    <div className="App">
    {!isLoggedIn ? <Auth /> : <Layout />}  
 
    </div>
  );
}

export default App;