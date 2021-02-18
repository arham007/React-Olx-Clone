import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ImgView from './ImgView'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import Footer from './Footer'
import { useHistory, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CounterContext } from '../ContextApi/CounterContext';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
}));

const Check = (id) => {
    console.log(id)
    const { ads } = useContext(CounterContext);
    const ali = ads.filter((usr) => {
        if (usr.id == id) {
            return usr
        }

    })
    return ali[0]

}



const ShwAd = () => {
    const params = useParams()
    let history = useHistory();
    // console.log(history.location.state)
    // let arham=Check(params.usrId)
    // console.log(arham)
    const state = history.location.state || Check(params.usrId)
    console.log(state)
    const classes = useStyles();
    let [check, setCheck] = useState(false)
    // let state=(hiso)
    return (
        <>


            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 md-12">
                        <div style={{ display: "flex", backgroundColor: "black", padding: "20px" }}>

                            <div style={{ height: "20px", backgroundColor: "#ffce32", width: "60px", paddingTop: "2px", paddingLeft: "5px", paddingRight: "5px" }}>
                                <h6 style={{ fontSize: "10px", fontWeight: "700", color: "#002f34", position: "sticky", zIndex: "4" }}>FEATURED</h6>
                            </div>
                            <div className="ml-3">
                                <ImgView src={state.image} />

                            </div>

                        </div>
                        <div style={{ borderBottom: "5px solid rgba(0,47,52,.36)" }}>
                            <div className="mt-2" style={{ border: "1px solid rgba(0,47,52,.36)", borderRadius: "5px", padding: "5px 20px" }}>
                                <h5 style={{ color: "#002f34", fontWeight: "700" }}>Details</h5>
                                <div style={{ display: "flex", justifyContent: "flex-start", padding: "11px 0" }}>
                                    <div style={{ color: "#002f34A3" }}>Category</div>
                                    <div style={{ color: "#002f34" }} className="ml-5">{state.category}</div>
                                    <div style={{ color: "#002f34A3" }} className="ml-5">Condition</div>
                                    <div style={{ color: "#002f34" }} className="ml-5">used</div>

                                </div>
                                <hr />
                                <h5 style={{ color: "#002f34", fontWeight: "700" }}>Description</h5>
                                <div>
                                    {state.detail}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 md-12">
                        <div className="mt-2" style={{ border: "1px solid rgba(0,47,52,.36)", padding: "10px 10px", borderRadius: "8px", paddingBottom: "15px" }} >
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <h3 style={{ color: "#002F34", fontWeight: "900" }}>Rs {state.price}</h3>
                                    <Typography style={{ color: "#002F34A3" }}>{state.title}</Typography>
                                </div>
                                <div style={{ color: "#002F34" }}>
                                    <ShareIcon />
                                    <FavoriteBorderIcon />

                                </div>

                            </div>

                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <Typography style={{ color: "#002F34A3" }} variant="subtitle2">{state.address} , {state.city}</Typography>
                                </div>
                                <div>
                                    <Typography style={{ color: "#002F34A3" }} variant="subtitle2">Today</Typography>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 mb-5" style={{ border: "1px solid rgba(0,47,52,.36)", padding: "10px 10px", borderRadius: "8px", paddingBottom: "15px" }} >
                            <h5 style={{ color: "#002f34", fontWeight: "700" }}>Seller description</h5>
                            <div>
                                <div style={{ display: "flex" }}>

                                    <div>
                                        <Avatar className={classes.purple}>A</Avatar>
                                    </div>
                                    <div className="ml-3 mt-2">
                                        <Typography style={{ fontWeight: "700", color: "#002F34" }}>{state.username}</Typography>
                                    </div>
                                </div>
                                <div className="mt-3">

                                    <Button className="aliya" fullWidth style={{ backgroundColor: "#002F34" }}><Typography style={{ fontWeight: "bolder", fontSize: "12px", color: "#fff" }}>Chat with seller</Typography></Button>
                                </div>
                                <div className="mt-2 text-center d-flex justify-content-center" >
                                    <PhoneIcon style={{ color: "#002F34" }} /> {check ? <div style={{ color: "#002F34" }}>{state.phoneNo}</div> : <><div className="mr-3">**** *******</div><span style={{ color: "blue", textDecoration: "underline", fontSize: "12px", cursor: "pointer" }} onClick={() => setCheck(true)}>show more</span> </>}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default ShwAd;