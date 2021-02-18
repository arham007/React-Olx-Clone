import React from 'react';

export const ContextReducer=(state,action)=>{
    // console.log(state)
//    console.log(action.payload)
    switch(action.type){
    
        case 'Add_User':
            return{
                ...state,
                user:[...state.user,action.payload],
                
            }
        case 'User_Log':
            return {
                
                ...state,
                userLogged:action.payload
            }
        case "Add_Ads":
            return {
                ...state,
                ads:[...state.ads,action.payload]
            }
        case "My_Ads":
            return{
                ...state,
                myAds:[...state.myAds,action.payload]
            }
        case "DEl_ADD":
   
            return{
              ...state,
              myAds:state.myAds.filter(usr => usr.id != action.payload),
              ads:state.ads.filter(usr => usr.id != action.payload)

            }
            default:
                return state
            }
}