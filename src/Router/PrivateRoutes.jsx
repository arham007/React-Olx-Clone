import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { CounterContext } from '../ContextApi/CounterContext';

const PrivateRoutes=({path , component:Component})=>{
  let {userLogged}=useContext(CounterContext);
  console.log(userLogged)
  let a=JSON.parse(localStorage.getItem("loggedIn"));
  console.log(a)
   return(
       <Route path={path} render={() =>{
        
        
        if(a==true){
            return <Component /> 
        }else{
          return  <Redirect to="/login" />
        }
       }} />
   )
    
}


export default PrivateRoutes;