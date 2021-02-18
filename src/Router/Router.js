import React from 'react';
import Home from '../screens/Home';
import Post from '../screens/Post';
import Login from '../components/Login'
import Signup from '../components/Signup'
import Loginuser from '../components/Loginuser'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import Myads from '../components/Myads';
import ShwAd from '../components/ShwAd';

const Router=()=>{
    return (
        <>
        
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoutes exact path="/post" component={Post} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/loginuser" component={Loginuser} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/myAds" component={Myads} />
            <PrivateRoutes exact path="/ad/:usrId" component={ShwAd} />
          </Switch>
        </BrowserRouter>
       
        
        </>
      );
}

export default Router;