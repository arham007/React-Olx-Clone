import { Container, Button } from '@material-ui/core';
import React, { useState } from 'react';
import Category from './Category';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Categories = () => {
    let [state,setState]=useState(false)

    const handleChange=()=>{
        setState(!state)
    }
    return (
        <>

        <div className="hover" style={{display:"flex" , alignItems:"center",boxShadow:"2px 2px 15px rgba(0,0,0,0.2)"}}>
            <div onClick={handleChange} data-toggle="collapse" data-target="#demo"><Button disableRipple>ALL CATEGORIES {state ? <ExpandLessIcon /> : <ExpandMoreIcon /> }  </Button></div>
            <a style={{marginLeft:"20px",color:"#002f34"}} href="">Mobiles Phones</a>
            <a style={{marginLeft:"20px",color:"#002f34"}} href="">Cars</a>
            <a style={{marginLeft:"20px",color:"#002f34"}} href="">Motorcycles</a>
            <a style={{marginLeft:"20px",color:"#002f34"}} href="">Houses</a>
            <a style={{marginLeft:"20px",color:"#002f34"}} href="">TV-Video-Audio</a>
            <a style={{marginLeft:"20px",color:"#002f34"}} href="">Tablets</a>
            <a style={{marginLeft:"20px",color:"#002f34"}} href="">Land & Plots</a>
        </div>
        {
            state ?  <div id="demo">
            <Category />

        </div>
        :
        null
        
       
        }
        </>
    )
}

export default Categories;