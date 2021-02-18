import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box, colors, Typography, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { CounterContext } from '../ContextApi/CounterContext';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20"



    },
}));
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const Loginuser = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    let history = useHistory();
    let { userLogged, login } = useContext(CounterContext);
    // console.log(userLogged)
    // let [state, setState] = useState("")
    let [open,setOpen]=useState(false)
    const classes = useStyles();


    const authenticateUser = () => {
        var bool = false;
        const arr = JSON.parse(localStorage.getItem("user"));
        arr.map((usr) => {
            if (usr.email === email && usr.password === password) {
                // window.alert("You  are logged succesfully")
                // setState(true)
                bool = true;
                login(true)
                setOpen(true)
                localStorage.setItem("curentUser", JSON.stringify(usr))
                // history.push("/")

            }

        })
        if (bool === false) {
            alert("incorrect password")

            setEmail("")
            setPassword("")
            // localStorage.setItem("loggedIn",false)


        }
    }
    const handleClose=() =>{
        setOpen(false)
        history.push('/')
    }

    return (
        <div className="d-flex justify-content-center mt-5">

            <Paper elevation={10} component={Box} width={400} >
                <div>
                    {/* {state ?
                <>
                <Alert message="Success Tips" type="success" showIcon />
                {setTimeout(() => {
                    history.push("/")
                    
                }, 3000)}
                </>
                :

                    <div />
            } */}
                    <Typography className="text-center p-2" variant="h4">Login Form</Typography>
                    <br />
                    <div className="text-center m-3">

                        <form noValidate autoComplete="off">

                            <TextField onChange={(e) => setEmail(e.target.value)} id="outlined-basic" fullWidth label="Email" variant="outlined" value={email} />

                            <br /><br />
                            <TextField onChange={(e) => setPassword(e.target.value)} fullWidth id="outlined-basic" type="password" label="Password" value={password} variant="outlined" />
                            <br />
                            <Button onClick={authenticateUser} variant="contained" color="secondary" fullWidth className="mt-4">Login</Button>
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
                                <Alert severity="success" onClose={handleClose}>
                                    You are Login successfully 
                                </Alert>
                            </Snackbar>

                            <br />


                            <Button onClick={() => history.push("/signup")} variant="contained" color="primary" fullWidth className="mt-4">Signup</Button>

                        </form>
                        <br />
                        <div style={{ width: "500", backgroundColor: "red", marginTop: "20", color: "#ffff" }}>{error}</div>
                    </div>
                </div>
            </Paper>


        </div>
    );
}

export default Loginuser;