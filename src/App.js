import React from 'react';
import Dots from './components/Dots';
import { CounterProvider } from "./ContextApi/CounterContext";
import Router from './Router/Router';



function App() {

  return (
    <>
   
    <CounterProvider>
  
      <Router />
    </CounterProvider> 
    
    
    </>
  );
}

export default App;
