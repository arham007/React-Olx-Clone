import React, { createContext, useEffect, useReducer } from 'react';
import { ContextReducer } from "./ContextReducer";

export const CounterContext=createContext();

const initialState={
    
    user:[{name:"Arham",email:"arhamkhancs99@gmail.com",password:"arham"},{name:"Armash",email:"armash12@hotmail.com",password:"arhamKhan"}],
    userLogged:"false",
    ads:[
        {id:1 ,username:"Armash",phoneNo:"03171070016",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2GRNNACguN6aMcuY6HjRntrWn1-yFEMBQg&usqp=CAU",price:"4000",detail:`S20 G981BDS G981U 5G 79,999 to 82,999
        S20 Plus 5G G986BDS 89,999 to 92,999 
        S20 Plus 5G G986U Snapdragon 92,999,
        S20 Plus 5G G986U PTA Approved 112,999,
        S20 G980FDS Box Pack 89,999,
        S20 Plus 5G G986BDS Box Pack 107,000
        Kindly call us between working hours11:30AM to 8:30PM
        `,address:"SCHEME 33",city:"KARACHI",category:"Mobile",title:"S20/ S20 plus/S20 ultra"},
        {id:2 ,username:"Armash",phoneNo:"03242960327",image:"https://cache4.pakwheels.com/ad_pictures/4499/Slide_toyota-corolla-gli-vvti-automatic-2016-44994284.jpg",price:"1,895,000",detail:`Honda City i-vtec 1.3

        Manual Transmission
        
        Model 2015
        
        Mileage 67,417
        
        Perfect Engine
        
        Smooth Transmission
        
        Chilled Air conditioner
        
        Power steering
        
        Power windows
        
        Abs Brakes
        
        17 inches Expensive Alloy wheels Installed
        
        Tyre are low profile and are in Excellent condition
        
        4 pieces are re-painted
        
        Price 1,895,000
        
        Price is almost final`,category:"Car",address:"SCHEME 33",city:"KARACHI",title:"Honda City i-vtec scrachless, well maintained excellent car"}],
    myAds:[]

    
}

export const CounterProvider=({children})=>{
    let [state,dispatch]=useReducer(ContextReducer,initialState)
    
    
    function Signin(userObj) {
        
     
        dispatch({
            type:"Add_User",
            payload:{
                name:userObj.name,
                email:userObj.email,
                password:userObj.password
            }
        })
        
    }
    
    function login(params) {
        dispatch({
            type:"User_Log",
            payload:params
        })
        localStorage.setItem("loggedIn",params)
        
    }

    function Addproducts(mainObj) {
        console.log(mainObj)
        dispatch({
            type:"Add_Ads",
            payload:{
                category:mainObj.category,
                title:mainObj.title,
                detail:mainObj.detail,
                price:mainObj.price,
                phoneNo:mainObj.phoneNo,
                city:mainObj.city,
                image:mainObj.image,
                id:mainObj.id,
                username:mainObj.username,
                address:mainObj.address,
                

            }
        })
        
    }
    function myProfile(mainObj){
        console.log(mainObj)

        dispatch({
            type:"My_Ads",
            payload:{
                category:mainObj.category,
                title:mainObj.title,
                detail:mainObj.detail,
                price:mainObj.price,
                phoneNo:mainObj.phoneNo,
                city:mainObj.city,
                image:mainObj.image,
                id:mainObj.id
                

            }
        })

    }

    function Delete(id){
        console.log(id)
        dispatch({
            type:"DEl_ADD",
            payload:id
        })

    }
  


    
    
    
    return(
        <>
        <CounterContext.Provider value={{
            user:state.user,
            Signin,
            userLogged:state.userLogged,
            login,
            ads:state.ads,
            Addproducts,
            myAds:state.myAds,
            myProfile,
            Delete

           
        }}>
            {children}

        </CounterContext.Provider>
        </>
    )
}