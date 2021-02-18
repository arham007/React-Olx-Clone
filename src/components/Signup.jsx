import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box, colors, Typography , Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { CounterContext } from "../ContextApi/CounterContext";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        marginTop:"20"



    },
}));

const Signup = () => {
    let {user,Signin}=useContext(CounterContext)
    const classes = useStyles();
    let [name,setName]=useState();
    let [email,setEmail]=useState();
    let [password,setpassword]=useState();
    
    const handleChange=()=>{
        Signin({
            name,email,password
        })
       
    }
    useEffect(()=>{

         localStorage.setItem ("user",JSON.stringify(user))
            
            
         
        },[user])
        
    return (
        <div className="d-flex justify-content-center mt-5">

            <Paper elevation={10} component={Box} width={400} >
                <div>
                    <Typography className="text-center p-2" variant="h4">Sign Up</Typography>
                    <br />
                    <div className="text-center m-3">

                    <form >
                        <TextField required="true" onChange={(e)=>{setName(e.target.value)}}  id="outlined-basic" fullWidth label="Name" variant="outlined" />
                        <br /><br/>
                        <TextField onChange={(e)=>{setEmail(e.target.value)}}  id="outlined-basic" fullWidth label="Email" variant="outlined" />
                        
                        <br /><br />
                        <TextField fullWidth id="outlined-basic" onChange={(e)=>{setpassword(e.target.value)}} type="password" label="Password" variant="outlined" />
                        <br />
                        <Button  onClick={handleChange}   variant="contained" color="secondary" fullWidth className="mt-4">Sign Up</Button>
                        
                    </form>
                    </div>
                </div>
            </Paper>


        </div>
    );
}

export default Signup